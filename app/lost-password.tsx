import { AlertCircleIcon, Box, Button, ButtonText, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField, VStack } from "@gluestack-ui/themed";

export default function LostPasswordScreen() {
  return (
    <Box px="$4" alignItems="center" justifyContent="center" height="$full">
      <VStack w="$80">
        <FormControl
          size="lg"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
          mb="$4"
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" defaultValue="hello@www.jam.com" placeholder="Email" />
          </Input>
          <FormControlHelper>
            <FormControlHelperText size="sm">
              You will receive an email containing the password reset instructions.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              The email you provided doesn't seem correct.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Send</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}