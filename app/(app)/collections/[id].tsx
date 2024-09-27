import { ScrollView } from "@/components/ui/scroll-view";
import { Box } from "@/components/ui/box";
import { useLocalSearchParams } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react-native";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import QuizCard from "@/components/quizzes/QuizCard";
import { VStack } from "@/components/ui/vstack";

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

export default function CollectionScreen() {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <Box className="flex-1">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <QuizCard quiz={item} />}
          ListHeaderComponent={(
            <VStack className="mt-8">
              <Image source={{ uri: "https://picsum.photos/300/200" }} className="w-full h-[200px] rounded-xl" alt="collection" />
              <HStack className="my-8 items-center justify-between">
                <Heading size="xl">245 quizzes</Heading>
                <Button size="lg" variant="link" action="primary" className="ml-2">
                  <ButtonText>Default</ButtonText>
                  <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                </Button>
              </HStack>
            </VStack>
          )}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
}