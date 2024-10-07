import { ScrollView } from "@/components/ui/scroll-view";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Link } from "expo-router";
import { Bell, BookOpen, ChevronRight, Eye, File, Info, LogOut, Music, User } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import * as Application from 'expo-application';
import { useSession } from "@/contexts/auth";
import colors from "tailwindcss/colors";
import { Box } from "@/components/ui/box";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { useState } from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import useApp from "@/contexts/app";

export default function SettingsScreen() {
  const { signOut } = useSession();
  const [showActionsheet, setShowActionsheet] = useState<boolean>(false)
  const handleClose = () => setShowActionsheet(false)
  const toggleTheme = useApp.use.toggleTheme()
  const theme = useApp.use.theme()

  console.log('currentTheme', theme)
  return (
    <SafeAreaView>
      <ScrollView>
        <VStack className="px-4 mt-8 justify-between h-full">
          <VStack>
            <Link href={"/settings/profile"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-yellow-500/10 items-center justify-center">
                      <User color={colors.yellow[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">Personal info</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <Link href={"/settings/notifications"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-red-500/10 items-center justify-center">
                      <Bell color={colors.red[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">Notifications</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <Link href={"/settings/music-effects"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-primary-500/10 items-center justify-center">
                      <Music color={colors.indigo[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">Music & effects</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <Link href={"/settings/terms-and-conditions"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-green-500/10 items-center justify-center">
                      <BookOpen color={colors.green[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">Terms & conditions</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <Link href={"/settings/help-center"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-yellow-500/10 items-center justify-center">
                      <File color={colors.yellow[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">Help center</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <HStack space="md" className="items-center py-4 justify-between w-full">
              <HStack className="items-center">
                <Box className="w-12 h-12 rounded-full bg-blue-500/10 items-center justify-center">
                  <Eye color={colors.blue[500]} />
                </Box>
                <VStack className="ml-8">
                  <Heading size="lg">Dark mode</Heading>
                </VStack>
              </HStack>
              <Switch
                value={theme === "dark"}
                defaultValue={'light'}
                size="sm"
                isDisabled={false}
                trackColor={{ false: colors.gray[50], true: "#6949FF" }}
                thumbColor={"#FFF"}
                activeThumbColor={"#FFF"}
                ios_backgroundColor={colors.gray[50]}
                onChange={() => toggleTheme()}
              />
            </HStack>
            <Link href={"/settings/about"} asChild>
              <TouchableOpacity>
                <HStack space="md" className="items-center py-4 justify-between w-full">
                  <HStack className="items-center">
                    <Box className="w-12 h-12 rounded-full bg-primary-500/10 items-center justify-center">
                      <Info color={colors.indigo[500]} />
                    </Box>
                    <VStack className="ml-8">
                      <Heading size="lg">About</Heading>
                    </VStack>
                  </HStack>
                  <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
                </HStack>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity onPress={() => setShowActionsheet(true)}>
              <HStack space="md" className="items-center py-4 justify-between w-full">
                <HStack className="items-center">
                  <Box className="w-12 h-12 rounded-full bg-red-500/10 items-center justify-center">
                    <LogOut color={colors.red[500]} />
                  </Box>
                  <VStack className="ml-8">
                    <Heading size="lg">Log out</Heading>
                  </VStack>
                </HStack>
                <ChevronRight color={theme === "light" ? "#212121" : "#FFF"} size={16} />
              </HStack>
            </TouchableOpacity>
          </VStack>
          <Center>
            <Text>{Application.nativeApplicationVersion}</Text>
          </Center>
        </VStack>
      </ScrollView>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <Center>
            <Heading size="lg" className="text-red-500 mb-8">Log out</Heading>
            <Text className="font-semibold">Are you sure you want to log out?</Text>
          </Center>
          <HStack className="items-center justify-between px-4 py-4">
            <Button size="lg" variant="outline" action="primary" className="flex-1 mr-1" onPress={() => signOut()}>
              <ButtonText>Sign out</ButtonText>
            </Button>
            <Button size="lg" variant="outline" action="secondary" className="flex-1 ml-1" onPress={handleClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
          </HStack>
        </ActionsheetContent>
      </Actionsheet>
    </SafeAreaView>
  );
}