import SoundList from "@/components/sounds/SoundList";
import { Box, Input, InputField, InputIcon, InputSlot, SearchIcon } from "@gluestack-ui/themed";
import sounds from "./sounds";

export default function SearchScreen() {
  return (
    <Box height="100%" px="$4">
      <Input mb="$4">
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
      </Input>
      <SoundList sounds={sounds} />
    </Box>

  );
}

