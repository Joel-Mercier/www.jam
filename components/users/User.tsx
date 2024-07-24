import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ButtonText, Button } from "../ui/button";
import { Menu, MenuItem, MenuItemLabel } from "../ui/menu";
import { Icon } from "../ui/icon";
import { ChevronDown } from "lucide-react-native";

export default function User({ user }) {
  return (
    <Link href={{
      pathname: "/users/[id]",
      params: { id: "1" }
    }} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost">
          <HStack className="justify-between">
            <HStack className="items-center">
              <Avatar>
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Heading size="md" numberOfLines={1} className="ml-4">
                Joel Mercier
              </Heading>
            </HStack>
            <HStack>
              <Button size="sm" variant="outline" action="primary" className="mr-1">
                <ButtonText>Following</ButtonText>
              </Button>
              <Menu
                placement="bottom"
                offset={5}
                disabledKeys={["Settings"]}
                trigger={({ ...triggerProps }) => {
                  return (
                    <Button {...triggerProps} size="sm" className="ml-1 p-2" action="secondary" variant="outline">
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
          </HStack>
        </Card>
        <Divider />
      </TouchableOpacity>
    </Link>
  );
}