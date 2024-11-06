import { PaginatedResult, wwwJamApiInstance } from ".";

export interface Collection {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  userId: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CollectionParams {
  limit?: number;
  page?: number;
  search?: string;
  sort?: string;
  relations?: string[];
  isPublic?: boolean;
}

export const getCollections = async (params: CollectionParams) => {
  const rsp = await wwwJamApiInstance.get<PaginatedResult<Collection>>("/api/v1/collections", {
    params,
  });
  return rsp.data;
};
