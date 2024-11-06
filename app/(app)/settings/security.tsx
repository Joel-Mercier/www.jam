import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Switch } from "@/components/ui/switch";
import { VStack } from "@/components/ui/vstack";
import { useSession } from "@/contexts/auth";
import usePrevious from "@/hooks/usePrevious";
import { X } from "lucide-react-native";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import { Text } from "@/components/ui/text";
import { useDisable2FA, useGenerateOtp, useVerifyOtp } from "@/hooks/www.quiz/useAuth";
import QRCode from 'react-qr-code';

export default function SecurityScreen() {
  const { currentUser } = useSession();
  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean>(currentUser?.twoFactorEnabled);
  const [show2FAModal, setShow2FAModal] = useState<boolean>(false);
  const [otpURI, setOtpURI] = useState<string>('');
  const previousIs2FAEnabled = usePrevious(is2FAEnabled);
  const doDisable2FA = useDisable2FA();
  const doGenerateOtp = useGenerateOtp();
  const doVerifyOtp = useVerifyOtp();
  const handle2FAToggle = (value: boolean) => {
    setIs2FAEnabled(value)
  }


  useEffect(() => {
    if (is2FAEnabled !== previousIs2FAEnabled) {
      console.log('2FA changed', is2FAEnabled)
      if (is2FAEnabled) {
        doGenerateOtp.mutate(undefined, {
          onSuccess: async (data) => {
            setShow2FAModal(true)
            setOtpURI(data)
          }
        })
      } else {
        doDisable2FA.mutate(undefined, {
          onSuccess: async () => {
            setIs2FAEnabled(false)
            setShow2FAModal(false)
          }
        })
      }
    }
  }, [is2FAEnabled])

  return (
    <SafeAreaView>
      <ScrollView>
        <VStack className="px-4">
          <HStack className="items-center justify-between mt-8 mb-4">
            <Heading size="lg" className="font-semibold">Enable 2FA</Heading>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{ false: colors.gray[50], true: "#6949FF" }}
              thumbColor={"#FFF"}
              activeThumbColor={"#FFF"}
              ios_backgroundColor={colors.gray[50]}
              defaultValue={currentUser?.twoFactorEnabled}
              value={is2FAEnabled}
              onToggle={handle2FAToggle}
            />
          </HStack>
        </VStack>
      </ScrollView>
      <Modal
        isOpen={show2FAModal}
        onClose={() => {
          setShow2FAModal(false)
        }}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Verify code to enable 2FA
            </Heading>
            <ModalCloseButton>
              <Icon
                as={X}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <QRCode value={otpURI} />
            <Text size="sm" className="text-typography-500 mt-4">
              <Text size="sm" className="font-bold">1. </Text>
              Download an authenticator app on your phone. (Google Authenticator, Authy,, etc.)
            </Text>
            <Text size="sm" className="text-typography-500 mt-2">
              <Text size="sm" className="font-bold">2. </Text>
              Scan the code above with your authenticator app to link your account.
            </Text>
            <Text size="sm" className="text-typography-500 mt-2">
              <Text size="sm" className="font-bold">3. </Text>
              Enter the code from your authenticator app in the field below.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShow2FAModal(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShow2FAModal(false)
              }}
            >
              <ButtonText>Verify</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
}
