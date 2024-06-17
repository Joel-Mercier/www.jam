import { FlashList } from "@shopify/flash-list";
import Notification from "./Notification";

export default function NotificationList({ notifications }) {
  return (
    <>
      <Notification notification={null} />
      <Notification notification={null} />
      <Notification notification={null} />
      <FlashList
        data={notifications}
        renderItem={({ item }) => <Notification user={item} />}
        estimatedItemSize={88}
      />
    </>
  )
}