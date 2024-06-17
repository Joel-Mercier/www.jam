import { FlashList } from "@shopify/flash-list";
import User from "./User";

export default function UserList({ users }) {
  return (
    <>
      <User user={null} />
      <User user={null} />
      <User user={null} />
      <FlashList
        data={users}
        renderItem={({ item }) => <User user={item} />}
        estimatedItemSize={88}
      />
    </>
  )
}