import { wwwJamApiInstance } from "./";

export const postLogin = async (params) => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/login", {
    ...params,
  });
  return rsp.data;
};

export const postLogout = async (params) => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/logout", {
    ...params,
  });
  return rsp.data;
};
