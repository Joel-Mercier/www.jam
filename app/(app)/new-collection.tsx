import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon, ChevronDownIcon, Image } from "lucide-react-native";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { FileUpload } from "@/components/ui/file-upload";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@/components/ui/actionsheet";
import { HStack } from "@/components/ui/hstack";

export default function NewCollectionScreen() {
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false)
  const handleUpload = async (useLibrary: boolean) => {
    setShowActionSheet(false)
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    }
    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }

    if (result.canceled) {
      console.log('User canceled image picker');
      return
    }

    return result;
  }
  
  const handleUploadPress = () => setShowActionSheet(true)
  const handleClose = () => setShowActionSheet(false)

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <VStack className="px-4 mt-8">
          <FileUpload icon={Image} label="Add cover image" className="mb-8" onPress={handleUploadPress} />
          <FormControl
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            className="mb-8"
          >
            <FormControlLabel className="mb-1">
              <FormControlLabelText>Title</FormControlLabelText>
            </FormControlLabel>
            <Input variant="underlined">
              <InputField type="text" placeholder="Enter a collection title" size="xl" className="text-xl" />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 3 characters are required.
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
              <FormControlLabelText>Visible to</FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger variant="underlined" size="lg">
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop/>
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Only me" value="private" />
                  <SelectItem label="Anyone" value="public" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
        
        </VStack>
        <Box className="absolute bottom-0 left-0 right-0 min-h-24 bg-background justify-center border-t-2 border-background-50 px-4">
          <Button
            size="xl"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Create</ButtonText>
          </Button>
        </Box>
      </KeyboardAvoidingView>
      <Actionsheet isOpen={showActionSheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className="items-center justify-between px-4 py-4">
            <Button size="lg" variant="outline" action="primary" className="flex-1 mr-1" onPress={async () => await handleUpload(true)}>
              <ButtonText>Library</ButtonText>
            </Button>
            <Button size="lg" variant="outline" action="secondary" className="flex-1 ml-1" onPress={async () => await handleUpload(false)}>
              <ButtonText>Camera</ButtonText>
            </Button>
          </HStack>
        </ActionsheetContent>
      </Actionsheet>
    </SafeAreaView>
  )
}