import { Box, Button, ButtonText, Divider, Heading } from "@gluestack-ui/themed";

export default function StartScreen() {
  return (
    <Box alignItems="center" justifyContent="center" height="$full">
      <Heading size="xl">Welcome to</Heading>
      <Heading size="4xl">www.jam</Heading>
      <Button
        w="$full"
        size="xl"
        variant="solid"
        action="primary"
      >
        <ButtonText>Sign in</ButtonText>
      </Button>
      <Divider />
      <Button
        w="$full"
        size="xl"
        variant="outline"
        action="primary"
      >
        <ButtonText>Create new account</ButtonText>
      </Button>
    </Box>
  )
}