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
import { SwitchCamera } from "lucide-react-native";
import { useNavigation } from "expo-router";

export default function JoinGameScreen() {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState<boolean>(false)
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [page, setPage] = useState<number>(0)
  const pager = useRef<PagerView>(null)

  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position)
  }

  const handleBarcodeScanned = ({ data }: any) => {
    console.log(data);
    setScanned(true)
  }

  useEffect(() => {
    navigation.setOptions({ headerStyle: { backgroundColor: page === 0 ? "#6949FF" : "#1F222B" } })
    pager.current?.setPage(page)
  }, [page])

  return (
    <SafeAreaView style={{ backgroundColor: page === 0 ? "#6949FF" : "#1F222B"}}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <VStack className="flex-1 px-4 mt-8 items-center justify-between">
          <HStack className="items-center justify-between">
            <Button size="lg" variant={page === 0 ? "solid" : "outline"} action="primary" className={`flex-1 mr-2 ${page === 0 ? "border-b-0 bg-white" : "border-white"}`} onPress={() => setPage(0)}>
              <ButtonText className={page === 0 ? "text-primary-500" : "text-white"}>Enter PIN</ButtonText>
            </Button>
            <Button size="lg" variant={page === 1 ? "solid" : "outline"} action="primary" className={`flex-1 mr-2 ${page === 1 ? "border-b-0 bg-white dark:bg-white" : "border-white dark:border-white"}`} onPress={() => setPage(1)}>
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
              <Button size="xl" variant="solid" action="primary" className="mb-8 w-full bg-white border-b-background-300" onPress={() => console.log("Pressed")}>
                <ButtonText className="text-primary-500 uppercase">Join now</ButtonText>
              </Button>
            </VStack>
            <VStack className="flex-1 items-center justify-between" collapsable={false}>
              <Box></Box>
              {!permission || !permission.granted ? (
                <Button size="lg" variant="outline" action="primary" className="flex-1 ml-2 border-white" onPress={() => requestPermission()}>
                  <ButtonText className="text-white">Grant camera permission</ButtonText>
                </Button>
              ) : (
                <>
                  <Box className="rounded-3xl overflow-hidden">
                    <CameraView
                      style={{ width: '100%', aspectRatio: 1 }}
                      facing={facing}
                      barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                      }}
                      onBarcodeScanned={handleBarcodeScanned}
                    />
                    <Box className="absolute top-0 left-0 border-t-8 border-l-8 border-primary-500 rounded-tl-3xl w-1/5 h-1/5"></Box>
                    <Box className="absolute top-0 right-0 border-t-8 border-r-8 border-primary-500 rounded-tr-3xl w-1/5 h-1/5"></Box>
                    <Box className="absolute bottom-0 right-0 border-b-8 border-r-8 border-primary-500 rounded-br-3xl w-1/5 h-1/5"></Box>
                    <Box className="absolute bottom-0 left-0 border-b-8 border-l-8 border-primary-500 rounded-bl-3xl w-1/5 h-1/5"></Box>
                  </Box>
                  <HStack className="mb-8">
                    <Button size="lg" variant="solid" action="primary" className="border-b-0 rounded-full h-16 w-16" onPress={() => facing === 'back' ? setFacing('front') : setFacing('back')}>
                      <ButtonIcon as={SwitchCamera} className="text-white h-8 w-8"  />
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

