import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import UserList from "@/components/users/UserList";

export default function FollowersScreen() {
  return (
    <Box className="px-4 mt-8">
      <Input className="mb-4">
        <InputSlot className="pl-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search follower" />
      </Input>
      <UserList users={[]} />
    </Box>
  );
}