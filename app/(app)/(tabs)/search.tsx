import SoundList from "@/components/sounds/SoundList";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Input, InputField, InputIcon, InputSlot, SearchIcon } from "@gluestack-ui/themed";
import sounds from "./sounds";
import { Settings2 } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function SearchScreen() {
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)
  return (
    <Box height="100%" px="$4">
      <Input mb="$4">
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
        <InputSlot pr="$3">
          <TouchableOpacity onPress={handleClose}>
            <InputIcon as={Settings2} />

          </TouchableOpacity>
        </InputSlot>
      </Input>
      <SoundList sounds={sounds} />
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>

  );
}

