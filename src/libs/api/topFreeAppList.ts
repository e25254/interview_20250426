import { newHttpInstance } from "./utils";

export const getTopFreeAppList = async () => {
  try {
    const instance = newHttpInstance({
      method: "GET",
      url: "/api/topfreeapp",
    });
    const res = await instance.request({});
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
