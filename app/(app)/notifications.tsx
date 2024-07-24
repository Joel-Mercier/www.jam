import { Box } from "@/components/ui/box";
import NotificationList from "@/components/notifications/NotificationList";

export default function NotificationsScreen() {
  return (
    <Box className="px-4">
      <NotificationList notifications={[]} />
    </Box>
  );
}