import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
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
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "@/components/ui/checkbox";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { CheckIcon, EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
  const headerHeight = useHeaderHeight();

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const togglePasswordConfirmation = () => {
    setShowPasswordConfirmation((showState) => {
      return !showState
    })
  }

  return (
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView style={{ paddingTop: headerHeight }}>
          <KeyboardAvoidingView>
            <Box className="px-4">
              <VStack>
                <Heading size="2xl" className="text-center mb-4">Create an account</Heading>
                <Text className="text-center mb-4">Please enter your informations to create your account.</Text>
                <FormControl
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={true}
                  className="mb-4"
                >
                  <FormControlLabel className="mb-1">
                    <FormControlLabelText>First name</FormControlLabelText>
                  </FormControlLabel>
                  <Input variant="underlined">
                    <InputField type="text" defaultValue="Joel" placeholder="First name" size="xl" className="text-xl" />
                  </Input>
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <FormControl
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={true}
                  className="mb-4"
                >
                  <FormControlLabel className="mb-1">
                    <FormControlLabelText>Last name</FormControlLabelText>
                  </FormControlLabel>
                  <Input variant="underlined">
                    <InputField type="text" defaultValue="Mercier" placeholder="Last name" size="xl" className="text-xl" />
                  </Input>
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
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
                <FormControl
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={true}
                  className="mb-4"
                >
                  <FormControlLabel className="mb-1">
                    <FormControlLabelText>Password</FormControlLabelText>
                  </FormControlLabel>
                  <Input variant="underlined">
                    <InputField type={showPassword ? "text" : "password"} defaultValue="12345" placeholder="Password" size="xl" className="text-xl"  />
                    <InputSlot onPress={togglePassword} className="pr-3">
                      <InputIcon
                        as={showPassword ? EyeIcon : EyeOffIcon}
                        className="text-primary-500"
                      />
                    </InputSlot>
                  </Input>
                  <FormControlHelper>
                    <FormControlHelperText>
                      Must be at least 6 characters.
                    </FormControlHelperText>
                  </FormControlHelper>
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <FormControl
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={true}
                  className="mb-4"
                >
                  <FormControlLabel className="mb-1">
                    <FormControlLabelText>Password confirmation</FormControlLabelText>
                  </FormControlLabel>
                  <Input variant="underlined">
                    <InputField type={showPasswordConfirmation ? "text" : "password"} defaultValue="12345" placeholder="Password confirmation" size="xl" className="text-xl" />
                    <InputSlot onPress={togglePasswordConfirmation} className="pr-3">
                      <InputIcon
                        as={showPasswordConfirmation ? EyeIcon : EyeOffIcon}
                        className="text-primary-500"
                      />
                    </InputSlot>
                  </Input>
                  <FormControlHelper>
                    <FormControlHelperText>
                      Must be identical to password.
                    </FormControlHelperText>
                  </FormControlHelper>
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <Checkbox size="md" isInvalid={false} isDisabled={false} className="mb-8" value="consent">
                  <CheckboxIndicator className="mr-2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>I agree with the terms & conditions</CheckboxLabel>
                </Checkbox>
                
              </VStack>

            </Box >
          </KeyboardAvoidingView>
        </ScrollView>
        <Box className="min-h-24 bg-white justify-center border-t-2 border-background-100 px-4">
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Sign up</ButtonText>
          </Button>
        </Box>
      </SafeAreaView>

  );
}