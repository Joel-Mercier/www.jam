import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { User } from "@/services/api/www.quiz/users";

interface Props {
  user: User,
  horizontal?: boolean,
  isLast?: boolean
}

export default function UserCard({ user, horizontal = false, isLast = false }: Props) {
  return (
    <Link href={{ pathname: "/users/[id]", params: { id: user.id } }} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost" className={` ${horizontal && !isLast ? "mr-2" : "mr-0"} `}>
          <VStack className="items-center">
            <Avatar size="lg">
              <AvatarFallbackText>{user.username}</AvatarFallbackText>
            </Avatar>
            <Heading size="md" numberOfLines={1} className="mt-2">
              {user.username}
            </Heading>
          </VStack>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}