import { wwwJamApiInstance } from ".";

export const postLogin = async (params) => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/login", {
    ...params,
  });
  return rsp.data;
};

export const postLogout = async () => {
  console.log(wwwJamApiInstance.defaults.headers.common);
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/logout");
  return rsp.data;
};
