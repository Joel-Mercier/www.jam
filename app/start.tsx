import { Box, Button, ButtonText, Divider, HStack, Heading, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function StartScreen() {
  return (
    <Box alignItems="center" justifyContent="center" height="$full">
      <Heading size="xl">Welcome to</Heading>
      <Heading size="4xl">www.jam</Heading>
      <VStack w="$80" mx="$8" mt="$8">
        <Link href="/login" asChild>
          <Button
            w="$full"
            size="xl"
            variant="solid"
            action="primary"
          >
            <ButtonText>Sign in</ButtonText>
          </Button>
        </Link>
        <Divider my="$8" />
        <Link href="/sign-up" asChild>
          <Button
            w="$full"
            size="xl"
            variant="outline"
            action="primary"
          >
            <ButtonText>Create new account</ButtonText>
          </Button>
        </Link>
      </VStack>
    </Box>
  )
}