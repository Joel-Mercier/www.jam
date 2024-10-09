import { useMutation } from "@tanstack/react-query"
import { postLogin, postLogout } from "@/services/api/www.quiz/auth"

export const useLogin = () => {
  return useMutation({
    mutationFn: (params) => {
      return postLogin(params)
    }
  })
}

export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      return postLogout()
    }
  })
}