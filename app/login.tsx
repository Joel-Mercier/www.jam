import { VStack } from "@/components/ui/vstack";
import { LinkText } from "@/components/ui/link";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
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
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useSession } from "@/contexts/auth";
import { Link, router } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";

type LoginInputs = {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const headerHeight = useHeaderHeight();
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

  const togglePassword = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    signIn(data);
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Box className="px-4" style={{ paddingTop: headerHeight }}>
          <VStack>
            <Heading size="2xl" className="mb-4">Hello there</Heading>
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
                  <Input variant="underlined">
                    <InputField type="text" placeholder="Email" onChangeText={onChange} onBlur={onBlur} value={value} size="xl" className="text-xl"  />
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
                  <Input variant="underlined">
                    <InputField type={showPassword ? "text" : "password"} placeholder="Password" onChangeText={onChange} onBlur={onBlur} value={value} size="xl" className="text-xl"  />
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
            <Divider />
            <Center className="mt-8">
              <Link href="/lost-password" asChild>
                <Button size="lg" action="primary" variant="link">
                  <ButtonText>Forgot password ?</ButtonText>
                </Button>
              </Link>
            </Center>
          </VStack>
        </Box>
        <Box className="absolute bottom-0 left-0 right-0 min-h-24 bg-white justify-center border-t-2 border-background-100 px-4">
          <Button
            size="xl"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText className="uppercase">Sign in</ButtonText>
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}