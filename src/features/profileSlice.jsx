import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const profileSlice = createSlice({
  name: "profile",

  initialState: {
    loading: false,
    error: false,
    about: [],
    brands: [],
    contact: [],
    education: [],
    experiences: [],
    skills: [],
    workCategory: [],
    workExperience: [],
    works: [],
    worksTop: [],
    files: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getAboutSuccess: (state, { payload }) => {
      state.loading = false;
      state.about = payload;
    },

    getBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.brands = payload;
    },

    getContactSuccess: (state, { payload }) => {
      state.loading = false;
      state.contact = payload;
    },

    getEducationSuccess: (state, { payload }) => {
      state.loading = false;
      state.education = payload;
    },

    getExperiencesSuccess: (state, { payload }) => {
      state.loading = false;
      state.experiences = payload;
    },

    getSkillsSuccess: (state, { payload }) => {
      state.loading = false;
      state.skills = payload;
    },

    getWorkCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.workCategory = payload;
    },

    getWorkExperienceSuccess: (state, { payload }) => {
      state.loading = false;
      state.workExperience = payload;
    },

    getWorksSuccess: (state, { payload }) => {
      state.loading = false;
      state.works = payload;
    },

    getWorksTopSuccess: (state, { payload }) => {
      state.loading = false;
      state.worksTop = payload;
    },

    getWorksWorksTopAndWorkCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.works = payload.works;
      state.worksTop = payload.worksTop;
      state.workCategory = payload.workCategory;
    },

    getSkillsAndExperiencesSuccess: (state, { payload }) => {
      state.loading = false;
      state.skills = payload.skills;
      state.experiences = payload.experiences;
    },

    getFilesSuccess: (state, { payload }) => {
      state.loading = false;
      state.files = payload;
    },

    fetchFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const persistConfig = {
  key: "profile",
  storage,
};

const persistedProfileReducer = persistReducer(
  persistConfig,
  profileSlice.reducer
);

export const {
  fetchStart,
  getAboutSuccess,
  getFilesSuccess,
  getWorksWorksTopAndWorkCategorySuccess,
  getSkillsAndExperiencesSuccess,
  fetchFail,
} = profileSlice.actions;
export default persistedProfileReducer;
