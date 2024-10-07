import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/api/www.quiz/users";

export const useUsers = (params: any) => {
  const query = useQuery({
    queryKey: ["www.quiz:users", params],
    queryFn: () => getUsers(params),
  });

  return {
    ...query,
  };
};
