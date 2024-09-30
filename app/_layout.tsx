import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { ToastProvider } from "@gluestack-ui/toast"
import { OverlayProvider } from "@gluestack-ui/overlay"
import { SessionProvider } from '@/contexts/auth';
import { TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import colors from 'tailwindcss/colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient()


export default function RootLayout() {
  const router = useRouter();
  useReactQueryDevTools(queryClient);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <OverlayProvider>
          <ToastProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <SessionProvider>
                <Stack
                  screenOptions={{
                    headerTintColor: colorScheme === 'dark' ? '#FFF' : '#181A20',
                    contentStyle: { backgroundColor: colorScheme === 'dark' ? '#181A20' : colors.white },
                    headerTitle: '',
                    headerStyle: {
                      borderWidth: 0,
                    },
                    headerLeft: (props) => {
                      if (router.canGoBack()) {
                        return <TouchableOpacity onPress={() => router.back()}><ArrowLeft color={props.tintColor} /></TouchableOpacity>
                      }
                    },
                  }}
                >
                  <Stack.Screen name="(app)" options={{ headerShown: false }} />
                  <Stack.Screen name="+not-found" />
                  <Stack.Screen name="start" options={{ headerShown: false }} />
                  <Stack.Screen name="login" options={{ title: "Login", headerShown: true }} />
                  <Stack.Screen name="sign-up" options={{ title: "Sign up",headerShown: true }} />
                  <Stack.Screen name="lost-password" options={{ title: "Lost password", headerShown: true }} />
                </Stack>
              </SessionProvider>
            </ThemeProvider>
          </ToastProvider>
        </OverlayProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
