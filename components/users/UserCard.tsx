import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function UserCard({ user, horizontal = false, isLast = false }) {
  return (
    <Link href={"/users/1"} asChild>
      <TouchableOpacity>
        <Card size="sm" variant="ghost" className={` ${horizontal && !isLast ? "mr-4" : "mr-0"} `}>
          <VStack className="items-center">
            <Avatar>
              <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
            </Avatar>
            <Heading size="md" numberOfLines={1} className="mt-2">
              Joel Mercier
            </Heading>
          </VStack>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}