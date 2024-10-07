import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import useApp from '@/contexts/app';
import { Stack, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';


export default function SettingsLayout() {
  const router = useRouter();
  const theme = useApp.use.theme()
  return (
    <Stack
      screenOptions={{
        headerTintColor: theme === 'dark' ? colors.white : '#181A20',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme === 'dark' ? "#191A1F" : colors.white,
          borderWidth: 0,
          elevation: 0
        },
        headerBackVisible: false,
        headerTitle: props => (
          <Box className="flex-1 justify-center items-start">
            <Heading size="xl">{props.children}</Heading>
          </Box>
        ),
        headerLeft: (props) => {
          if (router.canGoBack()) {
            return <TouchableOpacity onPress={() => router.back()}><ArrowLeft color={props.tintColor} /></TouchableOpacity>
          }
        },
      }}
      
    >
      <Stack.Screen name="index" options={{ title: "Settings" }} />
      <Stack.Screen name="profile" options={{ title: "Personal info" }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen name="music-effects" options={{ title: "Music & effects" }} />
      <Stack.Screen name="terms-and-conditions" options={{ title: "Terms and conditions" }} />
      <Stack.Screen name="help-center" options={{ title: "Help center" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
