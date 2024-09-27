import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@/components/ui/box";
import User from "@/components/users/User";

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

export default function TopAuthorsScreen() {
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <User user={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 8 }}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
}