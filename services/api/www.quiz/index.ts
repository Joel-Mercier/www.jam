import axios from "axios";

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    perPage: number,
    currentPage: number,
    firstPage: number,
    isEmpty: boolean,
    total: number,
    hasTotal: boolean,
    lastPage: number,
    hasMorePages: boolean,
    hasPages: boolean,
  };
}

console.log('API URL', process.env.EXPO_PUBLIC_WWW_JAM_API_URL)
const wwwJamApiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_WWW_JAM_API_URL,
  headers: { "Content-Type": "application/json" },
});

export { wwwJamApiInstance };
