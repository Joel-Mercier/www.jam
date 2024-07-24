import { Switch } from "@/components/ui/switch";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import { Heart } from "lucide-react-native";

export default function PrivacyScreen() {
  return (
    <Box className="px-4 mt-8">
      <HStack className="items-start justify-between py-4">
        <HStack>
          <Box className="mr-4 mt-2">
            <Heart color="white" />
          </Box>
          <VStack className="max-w-64">
            <Heading size="md" className="mt-0">Interests</Heading>
            <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit esse tenetur quae earum non? Dolorem, perferendis.</Text>
          </VStack>
        </HStack>
        <Switch size="md" isDisabled={false} />
      </HStack>
      <Divider />
      <HStack className="items-start justify-between py-4">
        <HStack>
          <Box className="mr-4 mt-2">
            <Heart color="white" />
          </Box>
          <VStack className="max-w-64">
            <Heading size="md" className="mt-0">Interests</Heading>
            <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit esse tenetur quae earum non? Dolorem, perferendis.</Text>
          </VStack>
        </HStack>
        <Switch size="md" isDisabled={false} />
      </HStack>
      <Divider />
    </Box>
  );
}