import { useQuery } from "@tanstack/react-query";
import { getQuizzes } from "@/services/api/www.quiz/quizzes";

export const useQuizzes = (params: any) => {
  const query = useQuery({
    queryKey: ["www.quiz:quizzes", params],
    queryFn: () => getQuizzes(params),
  });

  return {
    ...query,
  };
};
