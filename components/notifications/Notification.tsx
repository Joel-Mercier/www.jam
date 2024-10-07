import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Notification({ notification }) {
  return (
    <Link href={"/users/1"} asChild>
      <TouchableOpacity>
        <HStack className="py-4">
          <Avatar>
            <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
          </Avatar>
          <VStack className="ml-4">
            <Heading size="md" numberOfLines={1}>
              Joel Mercier
            </Heading>
            <Text numberOfLines={1} className="mb-0">has contributed to your sound</Text>
          </VStack>

        </HStack>
      </TouchableOpacity>
    </Link>
  );
}