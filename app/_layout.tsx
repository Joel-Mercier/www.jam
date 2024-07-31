import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { ToastProvider } from "@gluestack-ui/toast"
import { OverlayProvider } from "@gluestack-ui/overlay"
import { SessionProvider } from '@/contexts/auth';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient()


export default function RootLayout() {
  useReactQueryDevTools(queryClient);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
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
                    headerStyle: {
                      // backgroundColor: "transparent",
                      // borderWidth: 0,
                      // elevation: 0
                    }
                  }}
                >
                  <Stack.Screen name="(app)" options={{ headerShown: false }} />
                  <Stack.Screen name="+not-found" />
                  <Stack.Screen name="start" options={{ headerShown: false }} />
                  <Stack.Screen name="login" options={{ title: "Login", headerShown: true, headerTransparent: true }} />
                  <Stack.Screen name="sign-up" options={{ title: "Registration", headerShown: true, headerTransparent: true }} />
                  <Stack.Screen name="lost-password" options={{ title: "Lost password", headerShown: true, headerTransparent: true }} />
                </Stack>
              </SessionProvider>
            </ThemeProvider>
          </ToastProvider>
        </OverlayProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
