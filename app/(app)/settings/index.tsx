import { ScrollView } from "@/components/ui/scroll-view";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { BookOpen, ChevronRight, GlobeLock, Info, LogOut, Music, Sparkle } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import * as Application from 'expo-application';
import { useSession } from "@/contexts/auth";

export default function SettingsScreen() {
  const { signOut } = useSession();

  return (
    <ScrollView className="h-full mt-8">
      <VStack className="px-4 justify-between h-full">
        <VStack>
          <Link href={"/settings/profile"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <Avatar size="sm" className="rounded-full mr-8">
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
          <Link href={"/settings/privacy"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <GlobeLock color="white" />
                  <VStack className="ml-8">
                    <Heading size="sm">Privacy</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/settings/rate"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <Sparkle color="white" />
                  <VStack className="ml-8">
                    <Heading size="sm">Rate</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/settings/connect"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <Music color="white" />
                  <VStack className="ml-8">
                    <Heading size="sm">Connect with your music</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/settings/terms-and-conditions"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <BookOpen color="white" />
                  <VStack className="ml-8">
                    <Heading size="sm">Terms & conditions</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <Link href={"/settings/about"} asChild>
            <TouchableOpacity>
              <HStack space="md" className="items-center py-6 justify-between w-full">
                <HStack className="items-center">
                  <Info color="white" />
                  <VStack className="ml-8">
                    <Heading size="sm">About</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color="white" size={16} />
              </HStack>
            </TouchableOpacity>
          </Link>
          <Divider />
          <TouchableOpacity onPress={() => signOut()}>
            <HStack space="md" className="items-center py-6 justify-between w-full">
              <HStack className="items-center">
                <LogOut color="white" />
                <VStack className="ml-8">
                  <Heading size="sm">Log out</Heading>
                </VStack>
              </HStack>
              <ChevronRight color="white" size={16} />
            </HStack>
          </TouchableOpacity>
        </VStack>
        <Center>
          <Text>{Application.nativeApplicationVersion}</Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}