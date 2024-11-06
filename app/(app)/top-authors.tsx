import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@/components/ui/box";
import User from "@/components/users/User";
import { useInfiniteUsers } from "@/hooks/www.quiz/useUsers";

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
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteUsers({ limit: 1 });
  const flattenedData = data?.pages.flatMap((page) => page.data); 
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={flattenedData || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <User user={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 8 }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => !isFetching && hasNextPage && fetchNextPage()}
        />
      </Box>
    </SafeAreaView>
  );
}