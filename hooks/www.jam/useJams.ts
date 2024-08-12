import { getJams } from "@/services/api/www.jam/jams";
import { useQuery } from "@tanstack/react-query";

export const useJams = (params: any) => {
  const query = useQuery({
    queryKey: ["www.jam:jams", params],
    queryFn: () => getJams(params),
  });

  return {
    ...query,
  };
};
