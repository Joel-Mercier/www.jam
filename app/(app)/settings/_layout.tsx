import { Stack } from 'expo-router';


export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          elevation: 0
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Settings" }} />
      <Stack.Screen name="privacy" options={{ title: "Privacy" }} />
      <Stack.Screen name="terms-and-conditions" options={{ title: "Terms and conditions" }} />
    </Stack>
  );
}
