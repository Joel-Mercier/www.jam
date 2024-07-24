import Sound from "@/components/sounds/Sound";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Text } from "@/components/ui/text";
import { ChevronDown } from "lucide-react-native";
import { ScrollView } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';

export default function UserScreen() {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView>
      <Box className="h-[100%] mt-8 mb-8 px-4" style={{ paddingTop: headerHeight }}>
        <Center>
          <Avatar size="xl" className="rounded-full mb-4">
            <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
          </Avatar>
          <Heading size="2xl" bold className="mb-0">Joel Mercier</Heading>
          <HStack className="mt-4">
            <Button variant="outline" action="primary" className="mr-1">
              <ButtonText>Following</ButtonText>
            </Button>
            <Menu
              placement="bottom"
              offset={5}
              disabledKeys={["Settings"]}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} className="ml-1 p-2" action="secondary" variant="outline">
                    <Icon as={ChevronDown} />
                  </Button>
                )
              }}
            >
              <MenuItem key="Add account" textValue="Add account">
                <MenuItemLabel size="sm">Add account</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Community" textValue="Community">
                <MenuItemLabel size="sm">Community</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Plugins" textValue="Plugins">
                <MenuItemLabel size="sm">Plugins</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Settings" textValue="Settings">
                <MenuItemLabel size="sm">Settings</MenuItemLabel>
              </MenuItem>
            </Menu>
          </HStack>
          <Box className="mt-2">
            <Text>93 followers</Text>
          </Box>
        </Center>
        <Heading size="lg" className="mb-2 mt-4">Sounds</Heading>
        <Sound sound={null} />
        <Sound sound={null} />
        <Sound sound={null} />
        <Heading size="lg" className="mb-2 mt-4">Contributed to</Heading>
        <Sound sound={null} />
        <Sound sound={null} />
        <Heading size="lg" className="mb-2 mt-4">About</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, officia natus aut ipsa eos exercitationem corrupti magnam, magni nam a hic! Corrupti magnam, voluptas illo placeat dolor minima consectetur dolore.</Text>
      </Box>
    </ScrollView>
  )
}