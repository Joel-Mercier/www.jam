import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack, useNavigation } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { colorScheme } from 'nativewind';
import { TouchableOpacity } from 'react-native';


export default function SettingsLayout() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerTintColor: colorScheme === 'dark' ? '#FFF' : '#181A20',
        headerStyle: {
          backgroundColor: "#FFF",
          borderWidth: 0,
          elevation: 0
        },
        headerLeft: (props) => {
          if (props.canGoBack) {
            return <TouchableOpacity onPress={() => navigation.goBack()}><ArrowLeft color={props.tintColor} /></TouchableOpacity>
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
