import { HStack } from "@/components/ui/hstack";
import { Link, Tabs, useRouter } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Bell, Gamepad2, Home, LayoutGrid, Search, Send, Settings, SquarePlus, User, ChartSpline, CircleEllipsis, X } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";

export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerTintColor: colorScheme === 'dark' ? '#FFF' : '#212121',
        tabBarActiveTintColor: '#6949FF',
        tabBarShowLabel: true,
        headerStyle: {
          backgroundColor: colors.white,
          borderWidth: 0,
          elevation: 0,
        },
        headerTitle: props => (
          <Box className="flex-1 justify-center items-start">
            <Heading size="xl" style={{ color: props.tintColor}}>{props.children}</Heading>
          </Box>
        )
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'www.quiz',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <HStack space='xl' className="mr-4">
              <TouchableOpacity>
                <Search color={tintColor} />
              </TouchableOpacity>
              <Link href="/notifications" asChild>
                <TouchableOpacity>
                  <Bell color={tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) => (
            <LayoutGrid color={color} />
          ),
          headerShown: true,
          headerRight: ({ tintColor }) => (
            <HStack space='xl' className="mr-4">
              <Link href="/" asChild>
                <TouchableOpacity>
                  <Search color={tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
      <Tabs.Screen
        name="join-game"
        options={{
          title: 'Join game',
          headerStyle: {backgroundColor: "#6949FF"},
          headerTintColor: "#FFF",
          tabBarLabel: 'Join',
          tabBarIcon: ({ color, focused }) => (
            <Box className="w-8 h-8 bg-primary-500 rounded-full items-center justify-center">
              <Gamepad2 color="#FFF" size={22} />
            </Box>
          ),
          headerLeft: (props) => {
            if (router.canGoBack()) {
              return <TouchableOpacity onPress={() => router.back()} className="ml-4"><X color="#FFF" /></TouchableOpacity>
            }
          },
        }}
      />
      <Tabs.Screen
        name="new-quiz"
        options={{
          title: "Create quiz",
          tabBarLabel: 'Create',
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, focused }) => (
            <SquarePlus color={color} />
          ),
          headerLeft: (props) => {
            if (router.canGoBack()) {
              return <TouchableOpacity onPress={() => router.back()}><X color={props.tintColor} /></TouchableOpacity>
            }
          },
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
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User color={color} />
          ),
          headerShown: true,
          headerRight: ({ tintColor }) => (
            <HStack space='xl' className="mr-4">
              <Link href="/" asChild>
                <TouchableOpacity>
                  <Send color={tintColor} />
                </TouchableOpacity>
              </Link>
              <Link href="/my-statistics" asChild>
                <TouchableOpacity>
                  <ChartSpline color={tintColor} />
                </TouchableOpacity>
              </Link>
              <Link href="/settings" asChild>
                <TouchableOpacity>
                  <Settings color={tintColor} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
    </Tabs>
  );
}
