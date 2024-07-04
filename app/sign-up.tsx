import { AlertCircleIcon, Box, Button, ButtonText, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, ScrollView, SearchIcon, Text, VStack } from "@gluestack-ui/themed";
import { CheckIcon, EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

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
    <ScrollView>
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
              <FormControlLabelText>First name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" defaultValue="Joel" placeholder="First name" />
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
            mb="$4"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Last name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" defaultValue="Mercier" placeholder="Last name" />
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
            mb="$4"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" defaultValue="hello@www.jam.com" placeholder="Email" />
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
            mb="$4"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type={showPassword ? "text" : "password"} defaultValue="12345" placeholder="Password" />
              <InputSlot pr="$3" onPress={togglePassword}>
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
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
            mb="$4"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password confirmation</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type={showPasswordConfirmation ? "text" : "password"} defaultValue="12345" placeholder="Password confirmation" />
              <InputSlot pr="$3" onPress={togglePasswordConfirmation}>
                <InputIcon
                  as={showPasswordConfirmation ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
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
          <FormControl
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            mb="$4"
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Phone</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" defaultValue="+33611223344" placeholder="Phone" />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Checkbox size="md" isInvalid={false} isDisabled={false} mb="$8">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>I agree with the terms & conditions</CheckboxLabel>
          </Checkbox>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Sign up</ButtonText>
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  )
}