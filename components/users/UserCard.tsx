import { Avatar, AvatarFallbackText, Card, Divider, HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function UserCard({ user, horizontal = false, isLast = false }) {
  return (
    <Link href={"/users/1"} asChild>
      <TouchableOpacity>
        <Card size="sm" mr={horizontal && !isLast ? "$4" : "$0"} variant="ghost">
          <VStack alignItems="center">
            <Avatar>
              <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
            </Avatar>
            <Heading mt="$2" size="md" numberOfLines={1}>
              Joel Mercier
            </Heading>
          </VStack>
        </Card>
      </TouchableOpacity>
    </Link>
  )
}