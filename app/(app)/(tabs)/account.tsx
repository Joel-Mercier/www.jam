import { Avatar, AvatarFallbackText, Badge, Box, Card, Divider, HStack, Heading, Text, useToken } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Gem } from "lucide-react-native";
import { Pressable, TouchableOpacity } from "react-native";

export default function AccountScreen() {
  return (
    <Box height="100%" alignItems="center">
      <Avatar size="xl" borderRadius="$full" mb="$4" mt="$8">
        <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
      </Avatar>
      <Heading size="2xl" bold mb="$0">Joel Mercier</Heading>
      <Text mb="$4">jomercier@sfr.fr</Text>
      <HStack mb="$8">
        <Link href="/followers" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Abonnés</Text>
          </TouchableOpacity>
        </Link>
        <Divider orientation="vertical" mx="$4"></Divider>
        <Link href="/followed" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Abonnements</Text>
          </TouchableOpacity>
        </Link>
        <Divider orientation="vertical" mx="$4"></Divider>
        <Link href="/sounds" asChild>
          <TouchableOpacity>
            <Text><Text>0</Text> Sons</Text>
          </TouchableOpacity>
        </Link>
      </HStack>
      <Badge size="lg" p="$2">
        <Gem color={"white"} size={20} />
        <Text ml="$4">Score : 100</Text>
      </Badge>
    </Box>

  );
}

