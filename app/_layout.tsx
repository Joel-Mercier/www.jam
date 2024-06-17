import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "../config/gluestack-ui.config" // Optional if you want to use default theme
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
      <GluestackUIProvider config={config}>
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
                  <Stack.Screen name="login" options={{ headerShown: false }} />
                  <Stack.Screen name="sign-up" options={{ headerShown: false }} />

                </Stack>
              </SessionProvider>
            </ThemeProvider>
          </ToastProvider>
        </OverlayProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
