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
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";

export default function LostPasswordScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Box className="px-4" style={{ paddingTop: headerHeight}}>
          <VStack>
            <Heading size="3xl" className="mb-4">
              Forgot your password?
            </Heading>
            <Text className="mb-4">Enter your email address and we will send you a link to reset your password.</Text>
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
              <Input variant="underlined">
                <InputField type="text" defaultValue="hello@www.jam.com" placeholder="Email" size="xl" className="text-xl"  />
              </Input>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  The email you provided doesn't seem correct.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            
          </VStack>
        </Box>
        <Box className="absolute bottom-0 left-0 right-0 min-h-24 bg-background justify-center border-t-2 border-background-50 px-4">
          <Button
            size="xl"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Continue</ButtonText>
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}