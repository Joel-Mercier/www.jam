import { wwwJamApiInstance } from ".";

export const getCollections = async (params) => {
  const rsp = await wwwJamApiInstance.get("/api/v1/collections", {
    params,
  });
  return rsp.data;
};
