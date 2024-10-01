import { useStorageState } from '@/hooks/useStorageState';
import { useLogin } from '@/hooks/www.jam/useAuth';
import { useRouter } from 'expo-router';
import { createContext, useContext } from 'react';

const AuthContext = createContext<{
  signIn: (params) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
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
  const [[isLoading, session], setSession] = useStorageState('session');
  const doLogin = useLogin()
  const router = useRouter()

  return (
    <AuthContext.Provider
      value={{
        signIn: (params) => {
          // Perform sign-in logic here
          console.log('signIn', params)

          doLogin.mutate(params, {
            onSuccess: (data) => {
              console.log('success', data)
              setSession(data);
              router.replace('/(app)/(tabs)/')
            },
            onError: (error) => {
              console.log('error', error.message)
            }
          })
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
