import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Link } from "expo-router";
import { Gem } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export default function AccountScreen() {
  return (
    <Box className="h-[100%] items-center mt-8">
      <Avatar size="xl" className="rounded-full mb-4">
        <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
      </Avatar>
      <Heading size="2xl" bold className="mb-0">Joel Mercier</Heading>
      <Text className="mb-4">jomercier@sfr.fr</Text>
      <HStack className="mb-8">
        <Link href="/followers" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Abonnés</Text>
          </TouchableOpacity>
        </Link>
        <Divider orientation="vertical" className="mx-4"></Divider>
        <Link href="/followed" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Abonnements</Text>
          </TouchableOpacity>
        </Link>
        <Divider orientation="vertical" className="mx-4"></Divider>
        <Link href="/sounds" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Sons</Text>
          </TouchableOpacity>
        </Link>
      </HStack>
      <Badge size="lg" className="p-2">
        <Gem color={"white"} size={20} />
        <Text className="ml-4">Score : 100</Text>
      </Badge>
    </Box>
  );
}

