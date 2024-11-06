import { wwwJamApiInstance } from ".";
import { User } from "./users";

export const getAccount = async () => {
  const rsp = await wwwJamApiInstance.get<User>("/api/v1/accounts/me");
  return rsp.data;
};