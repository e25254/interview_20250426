import axios, { AxiosInstance, AxiosError } from "axios";

interface HttpProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "DISPATCH";
  url: string;
}

export const newHttpInstance = ({ method, url }: HttpProps): AxiosInstance => {
  const option = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
  };
  /* Create a Basic HTTP config */
  const instance = axios.create(option);
  /* Add Error Handler */
  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      console.error(`Fetch something error: ${error}`);
      if (error.response) {
        switch (error.response.status) {
          case 401:
            console.error(`PERMISSION DENIED: ${url}`);
            break;
          case 403:
            console.error(`PERMISSION DENIED: ${url}`);
            break;
          default:
            break;
        }
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
