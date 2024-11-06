import { PaginatedResult, wwwJamApiInstance } from ".";
import { Question } from "./questions";
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
  timesPlayed: number;
  likesCount: number;
  questionCount: number;
  user?: User;
  questions?: Question[];
}

export interface QuizParams {
  limit?: number;
  page?: number;
  search?: string;
  category?: number;
  collection?: number;
  user?: number;
  isPublic?: boolean;
  sort?: string;
  relations?: string[];
}

export const getQuizzes = async (params: QuizParams) => {
  const rsp = await wwwJamApiInstance.get<PaginatedResult<Quiz>>("/api/v1/quizzes", {
    params,
  });
  return rsp.data;
};

export const getQuiz = async (id: number) => {
  const rsp = await wwwJamApiInstance.get<Quiz>(`/api/v1/quizzes/${id}`);
  return rsp.data;
};
