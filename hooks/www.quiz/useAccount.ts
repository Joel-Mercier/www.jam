import { getAccount } from "@/services/api/www.quiz/accounts";
import { useQuery } from "@tanstack/react-query";

export const useAccount = () => {
  const query = useQuery({
    queryKey: ["www.quiz:account"],
    queryFn: () => getAccount(),
  })

  return query;
}