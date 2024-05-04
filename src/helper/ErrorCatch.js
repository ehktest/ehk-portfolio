import { toastErrorNotify } from "./ToastNotify";

const ErrorCatcher = (error, pathname = "") => {
  let err = error?.response
    ? `Error ${error?.response?.status}: ${
        typeof error?.response?.data === "string" &&
        (error?.response?.data).startsWith("<")
          ? error?.response.statusText
          : typeof error?.response?.data === "string" &&
            (error?.response?.data).startsWith("redirect_uri")
          ? error?.response?.data
          : error?.response?.data[Object.keys(error?.response?.data)[0]]
      }`
    : `Error : ${error?.message || error?.name}`;
  toastErrorNotify(err);
  return err;
};

export default ErrorCatcher;
