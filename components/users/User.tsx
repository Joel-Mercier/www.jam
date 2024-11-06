import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ButtonText, Button } from "@/components/ui/button";
import { User as UserType } from "@/services/api/www.quiz/users";

interface Props {
  user: UserType,
}

export default function User({ user }: Props) {
  return (
    <Link href={{
      pathname: "/users/[id]",
      params: { id: user.id }
    }} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost">
          <HStack className="items-center justify-between">
            <HStack className="items-center">
              <Avatar>
                <AvatarFallbackText>{user.username}</AvatarFallbackText>
              </Avatar>
              <Heading size="md" numberOfLines={1} className="ml-4 mb-0">
                {user.username}
              </Heading>
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