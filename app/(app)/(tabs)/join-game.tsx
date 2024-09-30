import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { VStack } from "@/components/ui/vstack";
import { StatusBar } from "@/components/ui/status-bar";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import PagerView from "react-native-pager-view";
import { useEffect, useRef, useState } from "react";
import { Box } from "@/components/ui/box";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { CameraIcon } from "lucide-react-native";

export default function JoinGameScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [page, setPage] = useState<number>(0)
  const pager = useRef<PagerView>(null)

  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position)
  }

  useEffect(() => {
    pager.current?.setPage(page)
  }, [page])

  return (
    <SafeAreaView style={{ backgroundColor: page === 0 ? "#6949FF" : "#1F222B"}}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <VStack className="flex-1 px-4 mt-8 items-center justify-between">
          <HStack className="items-center justify-between">
            <Button size="lg" variant={page === 0 ? "solid" : "outline"} action="primary" className={`flex-1 mr-2 ${page === 0 ? "bg-white" : "border-white"}`} onPress={() => setPage(0)}>
              <ButtonText className={page === 0 ? "text-primary-500" : "text-white"}>Enter PIN</ButtonText>
            </Button>
            <Button size="lg" variant={page === 1 ? "solid" : "outline"} action="primary" className={`flex-1 mr-2 ${page === 1 ? "bg-white" : "border-white"}`} onPress={() => setPage(1)}>
              <ButtonText className={page === 1 ? "text-primary-500" : "text-white"}>Scan QR code</ButtonText>
            </Button>
          </HStack>
          <PagerView style={{ flex: 1, width: '100%' }} initialPage={0} onPageSelected={handlePageSelected} ref={pager}>
            <VStack className="flex-1 items-center justify-between">
              <Box></Box>
              <Input
                variant="invisible"
                size="2xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder={"Enter pin".toUpperCase()} className="text-4xl uppercase text-center color-white font-extrabold placeholder:text-white/50" size="2xl" autoCapitalize="characters" keyboardType="number-pad" />
              </Input>
              <Button size="xl" variant="solid" action="primary" className="mb-8 w-full bg-white" onPress={() => console.log("Pressed")}>
                <ButtonText className="text-primary-500 uppercase">Join now</ButtonText>
              </Button>
            </VStack>
            <VStack className="flex-1 items-center justify-between" collapsable={false}>
             {!permission || !permission.granted ? (
                <Button size="lg" variant="outline" action="primary" className="flex-1 ml-2 border-white" onPress={() => requestPermission()}>
                  <ButtonText className="text-white">Grant camera permission</ButtonText>
                </Button>
              ) : (
                <>
                  <CameraView
                    style={{ flex: 1 }}
                    type={facing}
                    onBarCodeRead={({ data }) => {
                      console.log(data);
                    }}
                  />
                  <HStack>
                    <Button size="lg" variant="outline" action="primary" className="flex-1 mr-2 border-white" onPress={() => setFacing('back')}>
                      <ButtonIcon as={CameraIcon} className="text-white" />
                    </Button>
                  </HStack>
                </>
              )}
            </VStack>
          </PagerView>
        </VStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

