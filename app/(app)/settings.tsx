import { Avatar, AvatarFallbackText, Box, Divider, HStack, Heading, VStack, Text, Center, ScrollView } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { BookOpen, ChevronRight, GlobeLock, Info, LogOut, Music, Sparkle } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import * as Application from 'expo-application';

export default function SettingsScreen() {
  return (
    <ScrollView h="$full">
      <VStack px="$4" justifyContent="space-between" h="$full">
        <VStack>
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <Avatar size="sm" borderRadius="$full" mr="$8">
                    <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
                  </Avatar>
                  <VStack>
                    <Heading size="sm">Joel Mercier</Heading>
                    <Text size="sm">jomercier@sfr.fr</Text>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <GlobeLock color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">Privacy</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <Sparkle color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">Rate</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <Music color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">Connect with your music</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <BookOpen color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">Terms & conditions</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <Info color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">About</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <HStack alignItems="center" py="$6" justifyContent="space-between" space="md" w="$full">
                <HStack alignItems="center">
                  <LogOut color="white" />
                  <VStack ml="$8">
                    <Heading size="sm">Log out</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
        </VStack>
        <Center>
          <Text>{Application.nativeApplicationVersion}</Text>
        </Center>
      </VStack>
    </ScrollView>
  )
}