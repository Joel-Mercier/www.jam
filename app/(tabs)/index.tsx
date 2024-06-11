import { Box, Card, Heading, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <Box height="100%" justifyContent="center">
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          Quick search
        </Heading>
        <Text size="sm">Search for a product</Text>
      </Card>
      <Link href="/new-hunt" asChild>
        <Pressable>
          <Card size="md" variant="elevated" m="$3">
            <Heading mb="$1" size="md">
              Start a hunt
            </Heading>
            <Text size="sm">Start building your next hunting project</Text>
          </Card>
        </Pressable>
      </Link>

    </Box>

  );
}

