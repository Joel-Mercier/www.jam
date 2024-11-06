import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@/components/ui/box";
import QuizCard from "@/components/quizzes/QuizCard";
import { useInfiniteQuizzes } from "@/hooks/www.quiz/useQuizzes";
import { ActivityIndicator } from "react-native";

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

export default function DiscoverScreen() {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuizzes({ limit: 1 });
  const flattenedData = data?.pages.flatMap((page) => page.data);
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={flattenedData || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <QuizCard quiz={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => !isFetching && hasNextPage && fetchNextPage()}
        />
      </Box>
    </SafeAreaView>
  );
}