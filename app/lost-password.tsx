import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";

import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";

export default function LostPasswordScreen() {
  return (
    <Box className="px-4 items-center justify-center h-full">
      <VStack className="w-80">
        <FormControl
          size="lg"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
          className="mb-4"
        >
          <FormControlLabel className="mb-1">
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
  );
}