import { HStack } from "@/components/ui/hstack";
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AudioLines, Bell, Heart, Home, Plus, Search, Settings, SquarePlus, User } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          elevation: 0
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bonjour Joel',
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
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Search color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="new-sound"
        options={{
          title: "Create a new jam",
          tabBarIcon: ({ color, focused }) => (
            <SquarePlus color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sounds"
        options={{
          title: 'My jams',
          tabBarIcon: ({ color, focused }) => (
            <AudioLines color={color} />
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
        name="account"
        options={{
          title: 'Account',
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
