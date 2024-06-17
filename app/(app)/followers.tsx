import UserList from "@/components/users/UserList";
import { Box, Input, InputField, InputIcon, InputSlot, SearchIcon } from "@gluestack-ui/themed";

export default function FollowersScreen() {
  return (
    <Box px="$4">
      <Input mb="$4">
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search follower" />
      </Input>
      <UserList users={[]} />
    </Box>
  )
}