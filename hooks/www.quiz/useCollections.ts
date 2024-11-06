import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CollectionParams, getCollections } from "@/services/api/www.quiz/collections";

export const useCollections = (params: CollectionParams) => {
  const query = useQuery({
    queryKey: ["www.quiz:collections", params],
    queryFn: () => getCollections(params),
  });

  return query;
};

export const useInfiniteCollections = (params: CollectionParams) => {
  const query = useInfiniteQuery({
    queryKey: ["www.quiz:collections:infinite", params],
    queryFn: ({ pageParam }) => getCollections({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.meta.hasMorePages ? lastPage.meta.currentPage + 1 : null,
  })

  return query;
}

