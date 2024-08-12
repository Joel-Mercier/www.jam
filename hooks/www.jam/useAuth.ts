import { postLogin } from "@/services/api/www.jam/auth"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
  return useMutation({
    mutationFn: (params) => {
      console.log(params)
      return postLogin(params)
    }
  })
}