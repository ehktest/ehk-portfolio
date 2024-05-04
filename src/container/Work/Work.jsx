import "./Work.scss";
import { AiFillEye, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BiData, BiLogoDocker } from "react-icons/bi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useProfileCall from "../../hooks/useProfileCall";
import TablePagination from "@mui/material/TablePagination";

const Work = () => {
  const { works, worksTop, workCategory } = useSelector(
    (state) => state.profile
  );
  const { getWorksWorksTopAndWorkCategoryData } = useProfileCall();
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const addClassToPaginationButtons = () => {
    const elements = document.querySelectorAll(
      "div.pagination__container svg.MuiSvgIcon-root"
    );
    elements.forEach((element) => {
      element.classList.add("pointer-cursor");
    });
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setPage(0);
    setAnimateCard({ y: 100, opacity: 0 });

    addClassToPaginationButtons();

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) => {
            return work.categoryName === item;
          })
        );
      }
    }, 500);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchWorksWorksTopAndWorkCategories = async () => {
      await getWorksWorksTopAndWorkCategoryData();
    };

    fetchWorksWorksTopAndWorkCategories();
  }, []);

  useEffect(() => {
    addClassToPaginationButtons();
  }, [page]);

  useEffect(() => {
    if (works.length > 0) {
      setFilterWork(works);
    }
  }, [works]);

  return (
    <>
      <h2 className="head--text">
        Exercise-Focused <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {[...workCategory.map((ctg) => ctg.name), "All"].map(
          (category, index) => (
            <div
              key={`work-category-${index}`}
              onClick={() => handleWorkFilter(category)}
              className={`app__work-filter-item app__flex p--text pointer-cursor ${
                activeFilter === category ? "item-active" : ""
              }`}
            >
              {category}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((work, index) => (
            <div
              className="app__work-item app__flex"
              key={`filtered-work-${index}`}
            >
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye className="pointer-cursor" />
                    </motion.div>
                  </a>

                  {work?.youtubeLink && (
                    <a href={work.youtubeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex "
                      >
                        <AiFillYoutube className="pointer-cursor" />
                      </motion.div>
                    </a>
                  )}

                  {work?.dockerHubLink && (
                    <a
                      href={work.dockerHubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex "
                      >
                        <BiLogoDocker className="pointer-cursor" />
                      </motion.div>
                    </a>
                  )}

                  {work?.seperatedBackendLink && (
                    <a
                      href={work.seperatedBackendLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex "
                      >
                        <BiData className="pointer-cursor" />
                      </motion.div>
                    </a>
                  )}

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex "
                    >
                      <AiFillGithub className="pointer-cursor" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold--text">{work.title}</h4>
                <p className="p--text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p--text">
                    {work.tags.join(", ").replace(/, $/, "")}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
      <div className="pagination__container">
        <TablePagination
          component="div"
          count={filterWork.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[4]}
        />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),

  "work",
  "app__evensbg"
);
