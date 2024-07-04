import { useSession } from '@/contexts/auth';
import { Stack, Redirect } from 'expo-router';


export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/start" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // backgroundColor: "transparent",
          // borderWidth: 0,
          // elevation: 0
        }
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
      <Stack.Screen name="favorites" options={{ title: "Favorites" }} />
      <Stack.Screen name="followed" options={{ title: "Follows" }} />
      <Stack.Screen name="followers" options={{ title: "Followers" }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen name="sounds/[id]" options={{ title: "Sound" }} />
    </Stack>
  );
}
