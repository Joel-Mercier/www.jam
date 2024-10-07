import { useQuery } from "@tanstack/react-query";
import { getCollections } from "@/services/api/www.quiz/collections";

export const useCollections = (params: any) => {
  const query = useQuery({
    queryKey: ["www.quiz:collections", params],
    queryFn: () => getCollections(params),
  });

  return {
    ...query,
  };
};
