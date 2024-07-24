import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Avatar, AvatarFallbackText, AvatarGroup } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Sound({ sound, horizontal = false, isLast = false }) {
  return (
    <Link
      href={{
        pathname: "/sounds/[id]",
        params: { id: "1" }
      }}
      asChild
    >
      <TouchableOpacity>
        <Card
          className={` ${horizontal && !isLast ? "mr-4" : "mr-0"} ${horizontal ? "w-64" : "w-full"} mb-4 `}>
          <Heading size="md" numberOfLines={1}>
            My awesome song collab with www.jam
          </Heading>
          <Text numberOfLines={1}>by Joel Mercier</Text>
          <HStack className="items-center">
            <Text size="sm" className="mr-4">Collaborators</Text>
            <AvatarGroup>
              <Avatar size="sm" className="border-white border  dark:border-black">
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Avatar size="sm" className="border-white border  dark:border-black">
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Avatar size="sm" className="border-white border  dark:border-black">
                <AvatarFallbackText>+ 3</AvatarFallbackText>
              </Avatar>
            </AvatarGroup>
          </HStack>
          <HStack space="sm" className="flex-wrap flex-row items-center mt-4">
            <Badge size="sm" variant="outline" action="muted" className="rounded-none">
              <BadgeText>Piano</BadgeText>
            </Badge>
            <Badge size="sm" variant="outline" action="muted" className="rounded-none">
              <BadgeText>Chill</BadgeText>
            </Badge>
            <Badge size="sm" variant="outline" action="muted" className="rounded-none">
              <BadgeText>Pop</BadgeText>
            </Badge>
          </HStack>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}