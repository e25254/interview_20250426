import { newHttpInstance } from "./utils";

export const getTopFreeAppList = async () => {
  try {
    const instance = newHttpInstance({
      method: "GET",
      url: "/api/topfreeapp",
    });
    const res = await instance.request();
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAppDetails = async (id: string) => {
  try {
    const instance = newHttpInstance({
      method: "GET",
      url: `/api/applookup`,
    });
    const res = await instance.request({
      params: { id },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
