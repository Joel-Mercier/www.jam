import { Avatar, AvatarFallbackText, Card, Divider, HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Notification({ notification }) {
  return (
    <Link href={"/users/1"} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost">
          <HStack>
            <Avatar>
              <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
            </Avatar>
            <VStack ml="$4">
              <Heading size="md" numberOfLines={1}>
                Joel Mercier
              </Heading>
              <Text mb="$0" numberOfLines={1}>by Joel Mercier</Text>
            </VStack>

          </HStack>
        </Card>
        <Divider />
      </TouchableOpacity>

    </Link>
  )
}