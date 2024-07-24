import { VStack } from "@/components/ui/vstack";
import { LinkText } from "@/components/ui/link";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
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
import { useSession } from "@/contexts/auth";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const { signIn } = useSession();

  return (
    <KeyboardAvoidingView>
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
            <Input>
              <InputField type="password" defaultValue="12345" placeholder="Password" />
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
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => {
              signIn();
              router.replace('/')
            }}
            className="mb-8"
          >
            <ButtonText>Sign in</ButtonText>
          </Button>
          <Link href="/lost-password">
            <LinkText>Password forgotten ?</LinkText>
          </Link>
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  );
}