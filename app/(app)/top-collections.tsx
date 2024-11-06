import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import CollectionCard from "@/components/collections/CollectionCard";
import { Box } from "@/components/ui/box";
import { useInfiniteCollections } from "@/hooks/www.quiz/useCollections";

export default function TopCollectionsScreen() {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteCollections({ limit: 1 });
  const flattenedData = data?.pages.flatMap((page) => page.data); 
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={flattenedData || []}
          renderItem={({ item }) => <CollectionCard collection={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 16 }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReached={() => !isFetching && hasNextPage && fetchNextPage()}
        />
      </Box>
    </SafeAreaView>
  );
}