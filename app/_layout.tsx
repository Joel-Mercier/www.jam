import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
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
import { focusManager, onlineManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from "@gluestack-ui/toast"
import { OverlayProvider } from "@gluestack-ui/overlay"
import { SessionProvider } from '@/contexts/auth';
import { AppState, AppStateStatus, Platform, TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApp, { Theme } from '@/contexts/app';
import { StatusBar } from '@/components/ui/status-bar';
import NetInfo from '@react-native-community/netinfo';
import { DevToolsBubble } from 'react-native-react-query-devtools';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient()

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  const setTheme = useApp.use.setTheme()
  const theme = useApp.use.theme()

  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected)
    })
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)
    ;(async () => {
      const savedTheme = (await AsyncStorage.getItem("theme")) as
        | Theme
        | "light" || colorScheme
      if (savedTheme) {
        setTheme(savedTheme)
        AsyncStorage.setItem("theme", savedTheme)
      }
    })()
    return () => subscription.remove()
  }, [])



  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode={theme}>
        <OverlayProvider>
          <ToastProvider>
            <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
              <SessionProvider>
                <StatusBar barStyle={theme === 'dark' ? "light-content" : "dark-content"} />
                <Stack
                  screenOptions={{
                    headerTintColor: theme === 'dark' ? colors.white : '#191A1F',
                    contentStyle: { backgroundColor: theme === 'dark' ? '#191A1F' : colors.white },
                    headerStyle: { backgroundColor: theme === 'dark' ? '#191A1F' : colors.white },
                    headerTitle: '',
                    headerShadowVisible: false,
                  }}
                >
                  <Stack.Screen name="(app)" options={{ headerShown: false }} />
                  <Stack.Screen name="+not-found" />
                  <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                </Stack>
              </SessionProvider>
            </ThemeProvider>
          </ToastProvider>
        </OverlayProvider>
      </GluestackUIProvider>
      <DevToolsBubble />
    </QueryClientProvider>
  );
}
