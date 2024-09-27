import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import CollectionCard from "@/components/collections/CollectionCard";
import { Box } from "@/components/ui/box";

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

export default function TopCollectionsScreen() {
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <CollectionCard collection={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 16 }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
}