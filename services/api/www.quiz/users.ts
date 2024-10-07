import { wwwJamApiInstance } from ".";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const getUsers = async (params) => {
  const rsp = await wwwJamApiInstance.get("/api/v1/users", {
    params,
  });
  return rsp.data;
};
