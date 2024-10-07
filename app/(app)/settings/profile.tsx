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
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { EyeIcon, EyeOffIcon, Pencil } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Center } from "@/components/ui/center";

export default function ProfileScreen() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="px-4 mt-8 my-8">
          <VStack>
            <Center className="mb-8">
              <Avatar size="xl">
                <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
              </Avatar>
              <Button size="sm" variant="outline" action="primary" className="mt-2">
                <ButtonIcon as={Pencil} className="mr-2" />
                <ButtonText>Edit</ButtonText>
              </Button>
            </Center>
            <FormControl
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              className="mb-8"
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
              className="mb-8"
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
              className="mb-8"
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Input variant="underlined">
                <InputField type="text" defaultValue="hello@www.jam.com" placeholder="Email" size="xl" className="text-xl" />
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
              className="mb-8"
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Password</FormControlLabelText>
              </FormControlLabel>
              <Input variant="underlined">
                <InputField type={showPassword ? "text" : "password"} defaultValue="12345" placeholder="Password" size="xl" className="text-xl" />
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
              className="mb-8"
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Phone</FormControlLabelText>
              </FormControlLabel>
              <Input variant="underlined">
                <InputField type="text" defaultValue="+33611223344" placeholder="Phone" size="xl" className="text-xl" />
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
    </SafeAreaView>
  );
}