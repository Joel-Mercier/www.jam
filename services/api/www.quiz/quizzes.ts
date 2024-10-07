import { wwwJamApiInstance } from ".";
import { User } from "./users";

export interface Quiz {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  userId: number;
  categoryId: number;
  collectionId: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
}

export const getQuizzes = async (params) => {
  const rsp = await wwwJamApiInstance.get("/api/v1/quizzes", {
    params,
  });
  return rsp.data;
};
