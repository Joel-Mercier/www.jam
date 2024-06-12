import { wwwJamApiInstance } from ".";

export const getSounds = async (params) => {
  const rsp = await wwwJamApiInstance.get("/sounds", {
    params,
  });
  return rsp.data;
};
