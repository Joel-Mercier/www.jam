import { Button, ButtonText } from "@/components/ui/button";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon, ChevronDownIcon, Box } from "lucide-react-native";

export default function NewQuizScreen() {

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
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
                <InputField type="text" placeholder="Enter a title" size="xl" className="text-xl" />
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
                <FormControlLabelText>Description</FormControlLabelText>
              </FormControlLabel>
              <Input variant="underlined">
                <InputField type="text" placeholder="Enter a description" size="xl" className="text-xl" />
              </Input>
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
                <FormControlLabelText>Collection</FormControlLabelText>
              </FormControlLabel>
              <Select>
                <SelectTrigger variant="underlined" size="lg">
                  <SelectInput placeholder="Select collection" />
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
            <FormControl
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              className="mb-8"
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Theme</FormControlLabelText>
              </FormControlLabel>
              <Select>
                <SelectTrigger variant="underlined" size="lg">
                  <SelectInput placeholder="Select theme" />
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
            <FormControl
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              className="mb-8"
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Visibility of quiz questions</FormControlLabelText>
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
        </KeyboardAvoidingView>
      </ScrollView>
      <Box className="absolute bottom-0 left-0 right-0 min-h-24 bg-red-500 justify-center border-t-2 border-background-100 px-4">
        <HStack className="items-center justify-between">
          <Button
            size="xl"
            variant="solid"
            action="secondary"
            isDisabled={false}
            isFocusVisible={false}
            className="flex-1 mr-2"
          >
            <ButtonText>Save</ButtonText>
          </Button>
          <Button
            size="xl"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            className="flex-1 ml-2"
          >
            <ButtonText>Add question</ButtonText>
          </Button>
        </HStack>
      </Box>
    </SafeAreaView>
    
  )
}
