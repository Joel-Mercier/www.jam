import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Link } from "expo-router";

export default function StartScreen() {
  return (
    <Box className="items-center justify-center h-full">
      <Heading size="xl">Welcome to</Heading>
      <Heading size="4xl">www.jam</Heading>
      <VStack className="w-80 mx-8 mt-8">
        <Link href="/login" asChild>
          <Button
            size="xl"
            variant="solid"
            action="primary"
            className="w-full"
          >
            <ButtonText>Sign in</ButtonText>
          </Button>
        </Link>
        <Divider className="my-8" />
        <Link href="/sign-up" asChild>
          <Button
            size="xl"
            variant="outline"
            action="primary"
            className="w-full"
          >
            <ButtonText>Create new account</ButtonText>
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}