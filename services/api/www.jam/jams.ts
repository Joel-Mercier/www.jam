import { wwwJamApiInstance } from ".";

export const getJams = async (params) => {
  const rsp = await wwwJamApiInstance.get("/api/v1/jams", {
    params,
  });
  return rsp.data;
};
