import * as SecureStore from "expo-secure-store";
import { useLogin, useLogout } from '@/hooks/www.quiz/useAuth';
import { useRouter } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';
import { wwwJamApiInstance } from "@/services/api/www.quiz";

const AuthContext = createContext<{
  onRegister: (params: any) => void;
  signIn: (params: {email: string, password: string}) => void;
  signOut: (params: { id: string }) => void;
  session?: {abilities?: string[], expiresAt?: string, lastUsedAt?: string, name?: string, token?: string, type: string} | null;
}>({
  onRegister: () => null,
  signIn: () => null,
  signOut: () => null,
  session: null,
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
  const [session, setSession] = useState(null)
  const doLogin = useLogin()
  const doLogout = useLogout()
  const router = useRouter()

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
        onRegister: (params) => {

        },
        signIn: (params) => {
          doLogin.mutate(params, {
            onSuccess: (data) => {
              console.log('success', data)
              setSession(data);
              wwwJamApiInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
              async function setToken() {
                await SecureStore.setItemAsync('session', data.token);
              }
              setToken();
              router.replace('/(app)/(tabs)/')
            },
            onError: (error) => {
              console.log('error', error.message)
            }
          })
        },
        signOut: async (params) => {
          doLogout.mutate(params, {
            onSuccess: (data) => {
              async function logout() {
                console.log('success', data)
                setSession(null);
                wwwJamApiInstance.defaults.headers.common['Authorization'] = null;
                await SecureStore.deleteItemAsync('session');
              }
              logout();
            },
            onError: (error) => {
              console.log('error', error.message)
              async function deleteToken() {
                await SecureStore.deleteItemAsync('session');
              }
              deleteToken();
            }
          })
        },
        session,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
