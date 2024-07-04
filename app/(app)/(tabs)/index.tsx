import SoundList from "@/components/sounds/SoundList";
import { Box, Card, Heading, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <Box height="100%" px="$4">
      <Heading size="lg" mb="$2">Recently viewed</Heading>
      <SoundList horizontal sounds={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
      <SoundList sounds={[null, null, null]} />
    </Box>

  );
}

