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
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import { useHeaderHeight } from '@react-navigation/elements';

export default function ProfileScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const headerHeight = useHeaderHeight();

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <ScrollView>
      <Box className="h-full px-4 mt-8 mb-8" style={{ paddingTop: headerHeight }}>
        <VStack>
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
            className="mb-4"
          >
            <FormControlLabel className="mb-1">
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
            className="mb-4"
          >
            <FormControlLabel className="mb-1">
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
            className="mb-4"
          >
            <FormControlLabel className="mb-1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type={showPassword ? "text" : "password"} defaultValue="12345" placeholder="Password" />
              <InputSlot onPress={togglePassword} className="pr-3">
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  className="text-darkBlue-500"
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

          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Save</ButtonText>
          </Button>
        </VStack>
      </Box>
    </ScrollView>

  );
}