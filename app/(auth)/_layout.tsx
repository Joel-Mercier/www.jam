import useApp from '@/contexts/app';
import { useSession } from '@/contexts/auth';
import { Redirect, Stack, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';

export default function AuthLayout() {
  const { session } = useSession();
  const router = useRouter();
  const theme = useApp.use.theme()

  if (session) {
    // On web, static rendering will stop here as the user is authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(app)/(tabs)/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTintColor: theme === 'dark' ? colors.white : '#181A20',
        headerStyle: {
          backgroundColor: theme === 'dark' ? "#191A1F" : colors.white,
        },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTitle: '',
        headerLeft: (props) => {
          if (router.canGoBack()) {
            return <TouchableOpacity onPress={() => router.back()}><ArrowLeft color={props.tintColor} /></TouchableOpacity>
          }
        },
      }}
    >
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login", headerShown: true }} />
      <Stack.Screen name="sign-up" options={{ title: "Sign up",headerShown: true }} />
      <Stack.Screen name="lost-password" options={{ title: "Lost password", headerShown: true }} />
    </Stack>
  );
}
