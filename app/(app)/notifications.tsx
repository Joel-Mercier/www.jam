import Notification from "@/components/notifications/Notification";
import { Box } from "@/components/ui/box";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "Fifth Item",
  },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView>
      <Box className="flex-1 px-4">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <Notification notification={item} />}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
}