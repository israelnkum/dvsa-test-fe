import axios from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
let store;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const injectStore = (_store) => {
  store = _store;
};

export default function api(contentType = "application/json") {
  const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    headers: {
      Accept: "application/json",
      "Content-Type": contentType,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      Authorization: `Bearer ${store.getState().authSlice.token}`,
    },
  });

  makeRequest.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  makeRequest.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const code = error && error.response ? error.response.status : 0;

      if (code === 401) {
        localStorage.removeItem("persist:root");
        window.location.replace("/login");
      }

      if (code === 403) {
        localStorage.removeItem("persist:root");
        window.location.replace("/403");
      }

      if (code === 419) {
        localStorage.removeItem("persist:root");
        window.location.replace("/login");
      }
      return Promise.reject(error);
    },
  );

  return makeRequest;
}
