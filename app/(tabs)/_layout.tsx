import { Link, Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AudioLines, Bell, Home, Plus, Search, Settings, Settings2, User } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { HStack } from '@gluestack-ui/themed';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} />
          ),
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
          headerRight: ({ }) => (
            <HStack space='xl'>
              <Link href="/settings" asChild>
                <TouchableOpacity>
                  <Settings2 color={"white"} />
                </TouchableOpacity>

              </Link>
            </HStack>

          )
        }}
      />
      <Tabs.Screen
        name="sounds"
        options={{
          title: 'My sounds',
          tabBarIcon: ({ color, focused }) => (
            <AudioLines color={color} />
          ),
          headerShown: true,
          headerRight: ({ }) => (
            <HStack space='xl'>
              <Link href="/settings" asChild>
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
