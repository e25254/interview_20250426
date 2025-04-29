import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface HttpProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "DISPATCH";
  url: string;
}

interface RequestOptions {
  data?: Record<string, unknown>;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export const handleRequestError = (error: unknown, url: string) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error(`Fetch something error: ${axiosError.message}`);

    if (axiosError.response) {
      switch (axiosError.response.status) {
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
  } else {
    console.error(`Unknown error: ${error}`);
  }
  throw error;
};

export const newHttpInstance = ({
  method,
  url,
}: HttpProps): {
  request: (options?: RequestOptions) => Promise<AxiosResponse>;
} => {
  // 創建基本配置，但不使用實際的 axios.create 和攔截器
  const baseConfig: AxiosRequestConfig = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
  };

  // 返回一個帶有 request 方法的對象，模擬 AxiosInstance
  return {
    request: async (options: RequestOptions = {}) => {
      try {
        const config: AxiosRequestConfig = {
          ...baseConfig,
          data: options.data,
          params: options.params,
          headers: {
            ...baseConfig.headers,
            ...options.headers,
          },
        };

        const response = await axios(config);
        return response;
      } catch (error) {
        handleRequestError(error, url);
        throw error;
      }
    },
  };
};
