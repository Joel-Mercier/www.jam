import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@/components/ui/box";
import QuizCard from "@/components/quizzes/QuizCard";

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

export default function TopPicksScreen() {
  return (
    <SafeAreaView>
      <Box className="flex-1 mt-4">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <QuizCard quiz={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
}