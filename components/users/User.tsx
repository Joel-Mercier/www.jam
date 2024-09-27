import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ButtonText, Button } from "@/components/ui/button";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

export default function User({ user }) {
  return (
    <Link href={{
      pathname: "/users/[id]",
      params: { id: "1" }
    }} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost">
          <HStack className="items-center justify-between">
            <HStack className="items-center">
              <Avatar>
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <VStack className="ml-4">
                <Heading size="md" numberOfLines={1} className="mb-0">
                  Joel Mercier
                </Heading>
                <Text>@joel.mercier</Text>
              </VStack>
            </HStack>
            <HStack>
              <Button size="sm" variant="outline" action="primary" className="mr-1">
                <ButtonText>Following</ButtonText>
              </Button>
            </HStack>
          </HStack>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}