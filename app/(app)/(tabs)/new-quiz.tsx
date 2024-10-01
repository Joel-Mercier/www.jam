import { Button, ButtonText } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon, ChevronDownIcon, FileText, Image } from "lucide-react-native";
import { Box } from "@/components/ui/box";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@/components/ui/actionsheet";
import { useState } from "react";
import { HStack } from "@/components/ui/hstack";
import colors from "tailwindcss/colors";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NewQuizScreen() {
  const router = useRouter();
  const [showActionsheet, setShowActionsheet] = useState<boolean>(false)
  const handleClose = () => setShowActionsheet(false)

  const handleQuestionTypePress = (type: string) => {
    setShowActionsheet(false)
    router.navigate(`/new-question`)
    console.log(type)
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <VStack className="px-4 mt-8">
            <FileUpload icon={Image} label="Add cover image" className="mb-8" />
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
      <Box className="min-h-24 bg-white justify-between items-center flex-row border-t-2 border-background-50 px-4">
        <Button
          size="lg"
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          className="flex-1 mr-2"
        >
          <ButtonText>Save</ButtonText>
        </Button>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          className="flex-1 ml-2"
          onPress={() => setShowActionsheet(true)}
        >
          <ButtonText>Add question</ButtonText>
        </Button>
      </Box>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <Center className="mt-4 mb-8">
            <Heading size="xl">Add question</Heading>
          </Center>
          <Divider />
          <VStack className="w-full gap-4 mb-8">
            <HStack className="gap-4 w-full items-center justify-between">
              <TouchableOpacity className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center" onPress={() => handleQuestionTypePress("quiz")}>
                <Center>
                  <FileText color={colors.indigo[500]} size={32} />
                  <Heading size="lg" className="mt-2">Quiz</Heading>
                </Center>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center" onPress={() => handleQuestionTypePress("quiz")}>
                <Center>
                  <FileText color={colors.indigo[500]} size={32} />
                  <Heading size="lg" className="mt-2">Quiz</Heading>
                </Center>
              </TouchableOpacity>
            </HStack>
            <HStack className="gap-4 w-full items-center justify-between">
              <VStack className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center">
                <Center>
                  <FileText color={colors.indigo[500]} size={32} />
                  <Heading size="lg" className="mt-2">Quiz</Heading>
                </Center>
              </VStack>
              <VStack className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center">
                <Center>
                  <FileText color={colors.yellow[500]} size={32} />
                  <Heading size="lg" className="mt-2">True or false</Heading>
                </Center>
              </VStack>
            </HStack>
            <HStack className="gap-4 w-full items-center justify-between">
              <VStack className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center">
                <Center>
                  <FileText color={colors.indigo[500]} size={32} />
                  <Heading size="lg" className="mt-2">Quiz</Heading>
                </Center>
              </VStack>
              <VStack className="flex-1 bg-background-100 border border-background-200 rounded-xl p-4 justify-center items-center">
                <Center>
                  <FileText color={colors.yellow[500]} size={32} />
                  <Heading size="lg" className="mt-2">True or false</Heading>
                </Center>
              </VStack>
            </HStack>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </SafeAreaView>
    
  )
}
