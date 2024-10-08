import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import useApp from '@/contexts/app';
import { useSession } from '@/contexts/auth';
import { Stack, Redirect, useRouter, Link } from 'expo-router';
import { ArrowLeft, CircleEllipsis, Pencil, Search, Send, Star, X } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';


export default function AppLayout() {
  const { session } = useSession();
  const router = useRouter();
  const theme = useApp.use.theme()

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(auth)/start" />;
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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="discover"
        options={{
          title: "Discover",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen
        name="top-authors"
        options={{
          title: "Top authors",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen
        name="top-collections"
        options={{
          title: "Top collections",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen
        name="top-picks"
        options={{
         title: "Top picks",
         headerRight: (props) => {
          return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
        },
        }}
      />
      <Stack.Screen
        name="trending-quizzes"
        options={{
          title: "Trending quizzes",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
      <Stack.Screen name="favorites" options={{ title: "Favorites" }} />
      <Stack.Screen
        name="followers"
        options={{
          title: "Followers",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
      <Stack.Screen
        name="quizzes/[id]"
        options={{
          headerTitle: "",
          headerLeft: (props) => {
            if (router.canGoBack()) {
              return <TouchableOpacity onPress={() => router.back()}><X color={props.tintColor} /></TouchableOpacity>
            }
          },
          headerRight: (props) => (
            <HStack space='xl'>
              <Link href="/" asChild>
                <TouchableOpacity>
                  <Pencil color={props.tintColor} />
                </TouchableOpacity>
              </Link>
              <Link href="/" asChild>
                <TouchableOpacity>
                  <Star color={props.tintColor} />
                </TouchableOpacity>
              </Link>
              <Link href="/" asChild>
                <TouchableOpacity>
                  <CircleEllipsis color={props.tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
      <Stack.Screen
        name="new-collection"
        options={{
          title: "Create new collection",
          headerLeft: (props) => {
            if (router.canGoBack()) {
              return <TouchableOpacity onPress={() => router.back()}><X color={props.tintColor} /></TouchableOpacity>
            }
          },
        }}
      />
      <Stack.Screen
        name="collections/[id]"
        options={{
          title: "Collection",
          headerRight: (props) => {
            return <TouchableOpacity onPress={() => router.navigate('/')}><Search color={props.tintColor} /></TouchableOpacity>
          },
        }}
      />
      <Stack.Screen
        name="users/[id]"
        options={{
          headerTitle: "",
          headerRight: (props) => (
            <HStack space='xl'>
              <Link href="/" asChild>
                <TouchableOpacity>
                  <Send color={props.tintColor} />
                </TouchableOpacity>
              </Link>
              <Link href="/" asChild>
                <TouchableOpacity>
                  <CircleEllipsis color={props.tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
      <Stack.Screen name="new-question" options={{ title: "New Question" }} />
      <Stack.Screen
        name="my-statistics"
        options={{
          title: "My statistics",
          headerRight: ({ tintColor }) => (
            <HStack space='xl' className="mr-4">
              <Link href="/" asChild>
                <TouchableOpacity>
                  <CircleEllipsis color={tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
    </Stack>
  );
}
