import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import profileSlice, {
  fetchStart,
  getAboutSuccess,
  getFilesSuccess,
  getWorksWorksTopAndWorkCategorySuccess,
  getSkillsAndExperiencesSuccess,
  fetchFail,
} from "../features/profileSlice";
import ErrorCatcher from "../helper/ErrorCatch";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { urlFor, client } from "../client";

const useProfileCall = () => {
  const dispatch = useDispatch();

  const sortedDateData = (data, descending = false) => {
    return data.sort((a, b) => {
      const dateA = new Date(a._createdAt);
      const dateB = new Date(b._createdAt);

      return descending ? dateB - dateA : dateA - dateB;
    });
  };

  const sortedFieldData = (data, key, ...criteria) => {
    return [...data].sort((a, b) => {
      let aIndex = criteria.length,
        bIndex = criteria.length;

      for (let i = 0; i < criteria.length; i++) {
        if (a[key].startsWith(criteria[i])) {
          aIndex = i;
          break;
        }
      }

      for (let i = 0; i < criteria.length; i++) {
        if (b[key].startsWith(criteria[i])) {
          bIndex = i;
          break;
        }
      }

      return aIndex - bIndex;
    });
  };

  const combinedSortWithMovingToTheEndByFieldname = (
    data,
    fieldName,
    descending = false
  ) => {
    return data.sort((a, b) => {
      if (a[fieldName] && !b[fieldName]) return 1;
      if (!a[fieldName] && b[fieldName]) return -1;
      if (a[fieldName] && b[fieldName]) {
        const dateA = new Date(a._createdAt);
        const dateB = new Date(b._createdAt);
        return descending ? dateB - dateA : dateA - dateB;
      }

      const dateA = new Date(a._createdAt);
      const dateB = new Date(b._createdAt);
      return descending ? dateB - dateA : dateA - dateB;
    });
  };

  const getAboutData = async () => {
    dispatch(fetchStart());
    const query = "*[_type == 'about']";

    client
      .fetch(query)
      .then((data) => {
        const sortedDataResult = sortedDateData(data);

        dispatch(getAboutSuccess(sortedDataResult));
      })
      .catch((error) => {
        console.error(error);
        const err = ErrorCatcher(error);
        dispatch(fetchFail(err));
      });
  };

  const getFilesData = async () => {
    dispatch(fetchStart());
    const query = "*[_type == 'files']";

    client
      .fetch(query)
      .then((data) => {
        dispatch(getFilesSuccess(data));
      })
      .catch((error) => {
        console.error(error);
        const err = ErrorCatcher(error);
        dispatch(fetchFail(err));
      });
  };

  const getWorksWorksTopAndWorkCategoryData = async () => {
    dispatch(fetchStart());
    const worksQuery = `*[_type == 'works']{
      ...,
      "categoryName": category->name
    }`;
    const worksTopQuery = `*[_type == 'worksTop']{
      ...,
      "categoryName": category->name
    }`;
    const workCategoriesQuery = `*[_type == 'workCategory']`;

    try {
      const [worksData, worksTopData, workCategoriesData] = await Promise.all([
        client.fetch(worksQuery),
        client.fetch(worksTopQuery),
        client.fetch(workCategoriesQuery),
      ]);

      const sortedWorksData = combinedSortWithMovingToTheEndByFieldname(
        worksData,
        "dockerHubLink",
        true
      );
      const sortedWorksTopData = sortedDateData(worksTopData, true);
      const sortedWorkCategoriesData = sortedFieldData(
        workCategoriesData,
        "name",
        "FullStack",
        "React",
        "NextJS",
        "NodeJS",
        "Django",
        "JS",
        "SASS",
        "HTML&CSS",
        "Docker"
      );

      dispatch(
        getWorksWorksTopAndWorkCategorySuccess({
          works: sortedWorksData,
          worksTop: sortedWorksTopData,
          workCategory: sortedWorkCategoriesData,
        })
      );
    } catch (error) {
      console.error(error);
      const err = ErrorCatcher(error);
      dispatch(fetchFail(err));
    }
  };

  const getSkillsAndExperiencesData = async () => {
    dispatch(fetchStart());
    const skillsQuery = "*[_type == 'skills']";
    const experiencesQuery = "*[_type == 'experiences']";

    try {
      const [skillsData, experiencesData] = await Promise.all([
        client.fetch(skillsQuery),
        client.fetch(experiencesQuery),
      ]);

      const sortedSkillsData = sortedDateData(skillsData);
      const sortedExperiencesData = sortedDateData(experiencesData, true);

      dispatch(
        getSkillsAndExperiencesSuccess({
          skills: sortedSkillsData,
          experiences: sortedExperiencesData,
        })
      );
    } catch (error) {
      console.error(error);
      const err = ErrorCatcher(error);
      dispatch(fetchFail(err));
    }
  };

  return {
    getAboutData,
    getFilesData,
    getWorksWorksTopAndWorkCategoryData,
    getSkillsAndExperiencesData,
  };
};

export default useProfileCall;
