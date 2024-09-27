import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { FormControl, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@/components/ui/slider";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react-native";

export default function NewQuizScreen() {

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <Box className="h-full px-4 mt-8 mb-8">
          <FormControl className="mb-4">
            <FormControlLabel className="mb-1">
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Enter your jam's name" />
            </Input>
          </FormControl>
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Desciption</FormControlLabelText>
            </FormControlLabel>
            <Textarea size="lg">
              <TextareaInput placeholder="Tell us something about this jam" />
            </Textarea>
            <FormControlHelper>
              <FormControlHelperText>Type your comment above</FormControlHelperText>
            </FormControlHelper>
          </FormControl>
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Key</FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger variant="outline" size="lg">
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem label="UI Designing" value="ui" isDisabled={true} />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
          <FormControl className="mb-4">
            <FormControlLabel className="mb-4">
              <FormControlLabelText>BPM</FormControlLabelText>
            </FormControlLabel>
            <Center>
              <Slider
                minValue={50}
                maxValue={200}
                defaultValue={130}
                step={1}
                size="lg"
                orientation="horizontal"
                isDisabled={false}
                isReversed={false}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Center>
          </FormControl>
          <FormControl className="mb-4">
            <FormControlLabel className="mb-1">
              <FormControlLabelText>Vibe</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="What is this jam's vibe ?" />
            </Input>
          </FormControl>
          <Button size="xl" variant="solid" action="primary" className="mt-8">
            <ButtonText>Publish my jam</ButtonText>
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
