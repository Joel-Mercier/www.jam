import { getSounds } from "@/services/api/www.jam/sounds";
import { useQuery } from "@tanstack/react-query";

export const useSounds = (params: any) => {
  const query = useQuery({
    queryKey: ["www.jam:sounds", params],
    queryFn: () => getSounds(params),
  });

  return {
    ...query,
  };
};
