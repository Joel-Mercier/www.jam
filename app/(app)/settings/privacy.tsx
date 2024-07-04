import { Box, Divider, Heading, HStack, VStack, Text, Switch } from "@gluestack-ui/themed";
import { Heart } from "lucide-react-native";

export default function PrivacyScreen() {
  return (
    <Box px="$4">
      <HStack alignItems="flex-start" justifyContent="space-between" py="$4">
        <HStack>
          <Box mr="$4" mt="$2">
            <Heart color="white" />
          </Box>
          <VStack maxWidth="$64">
            <Heading size="md" mt="$0">Interests</Heading>
            <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit esse tenetur quae earum non? Dolorem, perferendis.</Text>
          </VStack>
        </HStack>
        <Switch size="md" isDisabled={false} />
      </HStack>
      <Divider />
      <HStack alignItems="flex-start" justifyContent="space-between" py="$4">
        <HStack>
          <Box mr="$4" mt="$2">
            <Heart color="white" />
          </Box>
          <VStack maxWidth="$64">
            <Heading size="md" mt="$0">Interests</Heading>
            <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit esse tenetur quae earum non? Dolorem, perferendis.</Text>
          </VStack>
        </HStack>
        <Switch size="md" isDisabled={false} />
      </HStack>
      <Divider />
    </Box>
  )
}