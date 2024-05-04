import axios from "axios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import ErrorCatcher from "../helper/ErrorCatch";
import { useEffect } from "react";

const useAxios = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    cancelToken: source.token,
  });

  const axiosPublic = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    cancelToken: source.token,
  });

  useEffect(() => {
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
