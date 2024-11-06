import * as SecureStore from "expo-secure-store";
import { useLogin, useLogout } from '@/hooks/www.quiz/useAuth';
import { useRouter } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';
import { wwwJamApiInstance } from "@/services/api/www.quiz";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import { CreateUserParams, User } from "@/services/api/www.quiz/users";
import { useCreateUser } from "@/hooks/www.quiz/useUsers";
import { getAccount } from "@/services/api/www.quiz/accounts";

export interface Session {
  abilities?: string[],
  expiresAt?: string,
  lastUsedAt?: string,
  name?: string,
  token?: string,
  type?: string
}

const AuthContext = createContext<{
  register: (params: CreateUserParams) => void;
  signIn: (params: {email: string, password: string}) => void;
  signOut: () => void;
  session?: Session | null;
  setSession: (session: Session) => void;
  currentUser?: User | null;
  setCurrentUser: (user: User) => void;
}>({
  register: () => null,
  signIn: () => null,
  signOut: () => null,
  session: null,
  setSession: () => null,
  currentUser: null,
  setCurrentUser: () => null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const doLogin = useLogin()
  const doLogout = useLogout()
  const doSignup = useCreateUser()
  const router = useRouter()
  const toast = useToast()

  useEffect(() => {
    async function loadToken() {
      const token = await SecureStore.getItemAsync('session');
      if (token) {
        wwwJamApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setSession({
          token: token,
        });
      }
    }
    loadToken();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        register: (params) => {
          doSignup.mutate(params, {
            onSuccess: (data) => {
              doLogin.mutate({ email: data.email, password: params.password }, {
                onSuccess: (data) => {
                  setSession(data);
                  wwwJamApiInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                  async function setToken() {
                    await SecureStore.setItemAsync('session', data.token);
                    const account = await getAccount()
                    setCurrentUser(account)
                  }
                  setToken();
                  toast.show({
                    placement: "top",
                    duration: 3000,
                    render: () => (
                      <Toast action="success">
                        <ToastTitle>Success</ToastTitle>
                        <ToastDescription>You have been successfully logged in</ToastDescription>
                      </Toast>
                    )
                  })
                  router.replace('/(app)/(tabs)/')
                }
              })
            },
          })
        },
        signIn: (params) => {
          doLogin.mutate(params, {
            onSuccess: (data) => {
              setSession(data);
              wwwJamApiInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
              async function setToken() {
                await SecureStore.setItemAsync('session', data.token);
                const account = await getAccount()
                setCurrentUser(account)
              }
              setToken();
              toast.show({
                placement: "top",
                duration: 3000,
                render: () => (
                  <Toast action="success">
                    <ToastTitle>Success</ToastTitle>
                    <ToastDescription>You have been successfully logged in</ToastDescription>
                  </Toast>
                )
              })
              router.replace('/(app)/(tabs)/')
            },
            onError: (error) => {
              toast.show({
                placement: "top",
                duration: 3000,
                render: () => (
                  <Toast action="error">
                    <ToastTitle>Error</ToastTitle>
                    <ToastDescription>An error occured while signing in with your account</ToastDescription>
                  </Toast>
                )
              })
              console.error('error', error.message)
            }
          })
        },
        signOut: async () => {
          doLogout.mutate(undefined,{
            onSuccess: (data) => {
              async function logout() {
                setSession(null);
                setCurrentUser(null);
                wwwJamApiInstance.defaults.headers.common['Authorization'] = null;
                await SecureStore.deleteItemAsync('session');
              }
              logout();
              toast.show({
                placement: "top",
                duration: 3000,
                render: () => (
                  <Toast action="success">
                    <ToastTitle>Success</ToastTitle>
                    <ToastDescription>You have been successfully logged out</ToastDescription>
                  </Toast>
                )
              })
            },
            onError: (error) => {
              console.log('error', error.message)
              async function deleteToken() {
                await SecureStore.deleteItemAsync('session');
              }
              deleteToken();
              toast.show({
                placement: "top",
                duration: 3000,
                render: () => (
                  <Toast action="error">
                    <ToastTitle>Error</ToastTitle>
                    <ToastDescription>An error occurred while logging out</ToastDescription>
                  </Toast>
                )
              })
            }
          })
        },
        session,
        setSession,
        currentUser,
        setCurrentUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
