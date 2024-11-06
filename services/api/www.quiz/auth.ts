import { wwwJamApiInstance } from ".";

export interface LoginParams {
  email: string;
  password: string;
}

export const postLogin = async (params: LoginParams) => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/login", {
    ...params,
  });
  console.log(rsp.data)
  return rsp.data;
};

export const postLogout = async () => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/logout");
  return rsp.data;
};

export const postGenerateOtp = async () => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/otp/generate");
  return rsp.data;
};

export const postVerifyOtp = async (otp: string) => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/otp/verify", {
    otp,
  });
  return rsp.data;
};

export const postDisableOtp = async () => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/otp/disable");
  return rsp.data;
};

export const postGenerateRecoveryCodes = async () => {
  const rsp = await wwwJamApiInstance.post("/api/v1/auth/otp/recovery-codes");
  return rsp.data;
};