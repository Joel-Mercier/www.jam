import { useSession } from '@/contexts/auth';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack, Redirect, useNavigation } from 'expo-router';
import { ArrowLeft, X } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';


export default function AppLayout() {
  const { session, isLoading } = useSession();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/start" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTintColor: colorScheme === 'dark' ? '#FFF' : '#181A20',
        headerStyle: { backgroundColor: "transparent", borderWidth: 0, elevation: 0 },
        headerTitleAlign: "left",
        headerLeft: (props) => {
          if (props.canGoBack) {
            return <TouchableOpacity onPress={() => navigation.goBack()}><ArrowLeft color={props.tintColor} /></TouchableOpacity>
          }
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="discover" options={{ title: "Discover" }} />
      <Stack.Screen name="top-authors" options={{ title: "Top authors" }} />
      <Stack.Screen name="top-collections" options={{ title: "Top collections" }} />
      <Stack.Screen name="top-picks" options={{ title: "Top picks" }} />
      <Stack.Screen name="trending-quizzes" options={{ title: "Trending quizzes" }} />
      <Stack.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
      <Stack.Screen name="favorites" options={{ title: "Favorites" }} />
      <Stack.Screen name="followed" options={{ title: "Follows" }} />
      <Stack.Screen name="followers" options={{ title: "Followers" }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen name="quizzes/[id]" options={{ headerTitle: "", headerTransparent: true }} />
      <Stack.Screen name="new-collection" options={{ headerTitle: "Create new collection", headerTransparent: true }} />
      <Stack.Screen
        name="collections/[id]"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerLeft: (props) => {
            if (props.canGoBack) {
              return <TouchableOpacity onPress={() => navigation.goBack()}><X color={props.tintColor} /></TouchableOpacity>
            }
          },
        }}
      />
      <Stack.Screen name="users/[id]" options={{ headerTitle: "", headerTransparent: true }} />
    </Stack>
  );
}
