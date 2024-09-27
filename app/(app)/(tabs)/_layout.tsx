import { HStack } from "@/components/ui/hstack";
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Bell, Gamepad2, Heart, Home, LayoutGrid, Plus, Settings, SquarePlus, User } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6949FF',
        tabBarShowLabel: true,
        headerStyle: {
          backgroundColor: colors.white,
          borderWidth: 0,
          elevation: 0
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hi Joel',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} />
          ),
          headerRight: ({ }) => (
            <HStack space='xl'>
              <Link href="/favorites" asChild>
                <TouchableOpacity>
                  <Heart color={"white"} />
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
          headerRight: ({ }) => (
            <HStack space='xl'>
              <Link href="/new-sound" asChild>
                <TouchableOpacity>
                  <Plus color={"white"} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabel: 'Join',
          tabBarIcon: ({ color, focused }) => (
            <Gamepad2 color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="new-quiz"
        options={{
          title: "Create a new quiz",
          tabBarLabel: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <SquarePlus color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="account"
        options={{
          title: 'Profile',
          headerTitle: '',
          tabBarIcon: ({ color, focused }) => (
            <User color={color} />
          ),
          headerShown: true,
          headerRight: ({ }) => (
            <HStack space='xl'>
              <Link href="/settings" asChild>
                <TouchableOpacity>
                  <Settings color={"white"} />
                </TouchableOpacity>
              </Link>
              <Link href="/notifications" asChild>
                <TouchableOpacity>
                  <Bell color={"white"} />
                </TouchableOpacity>
              </Link>
            </HStack>
          )
        }}
      />
    </Tabs>
  );
}
