import { Avatar, AvatarFallbackText, AvatarGroup, Badge, BadgeText, Box, Card, HStack, Heading, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Sound({ sound }) {
  return (
    <Link href={"/sounds/1"} asChild>
      <TouchableOpacity>
        <Card mb="$4">
          <Heading size="md" numberOfLines={1}>
            My awesome song collab with www.jam
          </Heading>
          <Text numberOfLines={1}>by Joel Mercier</Text>
          <HStack alignItems="center">
            <Text size="sm" mr="$4">Collaborators</Text>
            <AvatarGroup>
              <Avatar
                size="sm"
                borderColor="$white"
                borderWidth="$1"
                $dark-borderColor="$black"
              >
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Avatar
                size="sm"
                borderColor="$white"
                borderWidth="$1"
                $dark-borderColor="$black"
              >
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Avatar
                size="sm"
                borderColor="$white"
                borderWidth="$1"
                $dark-borderColor="$black"
              >
                <AvatarFallbackText>+ 3</AvatarFallbackText>
              </Avatar>
            </AvatarGroup>
          </HStack>
          <HStack flexWrap="wrap" flexDirection="row" alignItems="center" mt="$4" space="sm">
            <Badge size="sm" variant="outline" borderRadius="$none" action="muted">
              <BadgeText>Piano</BadgeText>
            </Badge>
            <Badge size="sm" variant="outline" borderRadius="$none" action="muted">
              <BadgeText>Chill</BadgeText>
            </Badge>
            <Badge size="sm" variant="outline" borderRadius="$none" action="muted">
              <BadgeText>Pop</BadgeText>
            </Badge>
          </HStack>
        </Card>
      </TouchableOpacity>
    </Link>
  )
}