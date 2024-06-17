import NotificationList from "@/components/notifications/NotificationList";
import { Box } from "@gluestack-ui/themed";

export default function NotificationsScreen() {
  return (
    <Box px="$4">
      <NotificationList notifications={[]} />
    </Box>
  )
}