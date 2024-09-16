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
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useSession } from "@/contexts/auth";
import { Link, router } from "expo-router";
import { useJams } from "@/hooks/www.jam/useJams";

type LoginInputs = {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { data, isLoading, isError } = useJams({})
  console.log(data)
  const { signIn } = useSession();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: "admin@wwwjam.com",
      password: "abcd1234"
    }
  })

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    signIn(data);
  }

  return (
    <KeyboardAvoidingView>
      <Box className="px-4 items-center justify-center h-full">
        <VStack className="w-80">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                size="lg"
                isDisabled={false}
                isInvalid={!!errors.email}
                isReadOnly={false}
                isRequired={true}
                className="mb-4"
              >
                <FormControlLabel className="mb-1">
                  <FormControlLabelText>Email</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField type="text" placeholder="Email" onChangeText={onChange} onBlur={onBlur} value={value} />
                </Input>
                {errors.email &&
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      Error
                    </FormControlErrorText>
                  </FormControlError>
                }
              </FormControl>
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
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
                  <InputField type="password" placeholder="Password" onChangeText={onChange} onBlur={onBlur} value={value} />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText>
                    Must be at least 6 characters.
                  </FormControlHelperText>
                </FormControlHelper>
                {errors.password &&

                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                }
              </FormControl>
            )}
          />
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={handleSubmit(onSubmit)}
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