import { useMutation } from "@tanstack/react-query"
import { LoginParams, postDisableOtp, postGenerateOtp, postGenerateRecoveryCodes, postLogin, postLogout, postVerifyOtp } from "@/services/api/www.quiz/auth"

export const useLogin = () => {
  return useMutation({
    mutationFn: (params: LoginParams) => {
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

export const useGenerateOtp = () => {
  return useMutation({
    mutationFn: () => {
      return postGenerateOtp()
    }
  })
}

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (otp: string) => {
      return postVerifyOtp(otp)
    }
  })
}

export const useDisable2FA = () => {
  return useMutation({
    mutationFn: () => {
      return postDisableOtp()
    }
  })
}

export const useGenerateRecoveryCodes = () => {
  return useMutation({
    mutationFn: () => {
      return postGenerateRecoveryCodes()
    }
  })
}