import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getQuiz, getQuizzes, QuizParams } from "@/services/api/www.quiz/quizzes";

export const useQuizzes = (params: QuizParams) => {
  const query = useQuery({
    queryKey: ["www.quiz:quizzes", params],
    queryFn: () => getQuizzes(params),
  });

  return query;
};

export const useInfiniteQuizzes = (params: QuizParams) => {
  const query = useInfiniteQuery({
    queryKey: ["www.quiz:quizzes:infinite", params],
    queryFn: ({ pageParam }) => getQuizzes({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.meta.hasMorePages ? lastPage.meta.currentPage + 1 : null,
  })

  return query;
}

export const useQuiz = (id: number) => {
  const query = useQuery({
    queryKey: ["www.quiz:quiz", id],
    queryFn: () => getQuiz(id),
  });

  return query;
};
