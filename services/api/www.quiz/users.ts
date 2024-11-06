import { PaginatedResult, wwwJamApiInstance } from ".";
import { Collection } from "./collections";
import { Quiz } from "./quizzes";

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  collections?: Collection[];
  quizzes?: Quiz[];
  twoFactorEnabled: boolean;  
}

export interface UserParams {
  limit?: number;
  page?: number;
  search?: string;
  sort?: string;
  relations?: string[];
}

export interface CreateUserParams {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface UpdateUserParams {
  username: string;
  email: string;
}

export const getUsers = async (params: UserParams) => {
  const rsp = await wwwJamApiInstance.get<PaginatedResult<User>>("/api/v1/users", {
    params,
  });
  return rsp.data;
};

export const getUser = async (id: number) => {
  const rsp = await wwwJamApiInstance.get<User>(`/api/v1/users/${id}`);
  return rsp.data;
};

export const createUser = async (data: CreateUserParams) => {
  const rsp = await wwwJamApiInstance.post<User>("/api/v1/users", data);
  return rsp.data;
};

export const updateUser = async (id: number, data: UpdateUserParams) => {
  const rsp = await wwwJamApiInstance.put<User>(`/api/v1/users/${id}`, data);
  return rsp.data;
};
