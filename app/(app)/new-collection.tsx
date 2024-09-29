import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon, ChevronDownIcon } from "lucide-react-native";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";

export default function NewCollectionScreen() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
      <VStack className="px-4 mt-8">
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
      <Box className="absolute bottom-0 left-0 right-0 min-h-24 bg-white justify-center border-t-2 border-background-100 px-4">
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
    </SafeAreaView>
  )
}