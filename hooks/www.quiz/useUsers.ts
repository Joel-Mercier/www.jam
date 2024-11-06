import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { createUser, CreateUserParams, getUser, getUsers, updateUser, UpdateUserParams, UserParams } from "@/services/api/www.quiz/users";

export const useUsers = (params: UserParams) => {
  const query = useQuery({
    queryKey: ["www.quiz:users", params],
    queryFn: () => getUsers(params),
  });

  return query;
};

export const useInfiniteUsers = (params: UserParams) => {
  const query = useInfiniteQuery({
    queryKey: ["www.quiz:users:infinite", params],
    queryFn: ({ pageParam }) => getUsers({ page: pageParam, ...params }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.meta.hasMorePages ? lastPage.meta.currentPage + 1 : null,
  })

  return query;
}

export const useUser = (id: number) => {
  const query = useQuery({
    queryKey: ["www.quiz:user", id],
    queryFn: () => getUser(id),
  });

  return query;
}

export const useCreateUser = () => {
  const query = useMutation({
    mutationFn: (params: CreateUserParams) => {
      return createUser(params)
    }
  })

  return query;
}

export const useUpdateUser = () => {
  const query = useMutation({
    mutationFn: (params: UpdateUserParams & {id: number}) => {
      const { id, ...rest } = params;
      return updateUser(id, params)
    }
  })

  return query;
}
