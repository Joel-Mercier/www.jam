import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { ArrowUpDown, ChevronDown } from "lucide-react-native";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Divider } from "@/components/ui/divider";
import { useLocalSearchParams } from "expo-router";
import { useQuiz } from "@/hooks/www.quiz/useQuizzes";
import QuestionCard from "@/components/questions/QuestionCard";
import EmptyList from "@/components/ui/empty-list";

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: quiz, isLoading: isQuizLoading } = useQuiz(id as unknown as number);

  return (
    <SafeAreaView>
      <Box className="flex-1">
        <FlashList
          data={quiz.questions || []}
          renderItem={({ item }) => <QuestionCard question={item} />}
          ListHeaderComponent={(
            <VStack className="mt-8">
              <Image source={{ uri: "https://picsum.photos/300/200" }} className="w-full h-[200px] rounded-xl" alt="quiz" />
              <Heading size="xl" numberOfLines={1} className="my-8">
                {quiz?.name}
              </Heading>
              <Divider />
              <HStack className="items-center justify-between my-4">
                <VStack className="flex-1 p-2 items-center justify-center border-r-2 border-background-50">
                  <Heading size="md" numberOfLines={1} className="mb-0">
                    {quiz?.questionCount}
                  </Heading>
                  <Text>questions</Text>
                </VStack>
                <VStack className="flex-1 p-2 items-center justify-center">
                  <Heading size="md" numberOfLines={1} className="mb-0">
                    {quiz?.timesPlayed}
                  </Heading>
                  <Text>plays</Text>
                </VStack>
                <VStack className="flex-1 p-2 items-center justify-center border-l-2 border-background-50">
                  <Heading size="md" numberOfLines={1} className="mb-0">
                    274M
                  </Heading>
                  <Text>favorites</Text>
                </VStack>
                <VStack className="flex-1 p-2 items-center justify-center border-l-2 border-background-50">
                  <Heading size="md" numberOfLines={1} className="mb-0">
                    274M
                  </Heading>
                  <Text>shares</Text>
                </VStack>
              </HStack>
              <Divider />
              <HStack className="items-center justify-between mt-8 mb-4">
                <HStack className="items-center">
                  <Avatar size="md">
                    <AvatarFallbackText>{quiz?.user?.username}</AvatarFallbackText>
                  </Avatar>
                  <VStack className="ml-4">
                    <Heading size="lg" numberOfLines={1} className="mb-0">
                      {quiz?.user?.username}
                    </Heading>
                  </VStack>
                </HStack>
                <HStack>
                  <Button size="sm" variant="outline" action="primary" className="mr-1">
                    <ButtonText>Following</ButtonText>
                  </Button>
                </HStack>
              </HStack>
              <VStack className="my-4">
                <Heading size="lg" numberOfLines={1} className="mb-4">
                  Description
                </Heading>
                <Text className="text-lg">{quiz?.description}</Text>
              </VStack>
              <HStack className="my-8 items-center justify-between">
                <Heading size="xl">{quiz?.questionCount} questions</Heading>
                <Button size="lg" variant="link" action="primary" className="ml-2">
                  <ButtonText>Default</ButtonText>
                  <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                </Button>
              </HStack>
            </VStack>
          )}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </Box>
      <Box className="min-h-24 bg-background justify-between items-center flex-row border-t-2 border-background-50 px-4">
        <Button
          size="lg"
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          className="flex-1 mr-2"
        >
          <ButtonText>Play solo</ButtonText>
        </Button>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          className="flex-1 ml-2"
        >
          <ButtonText>Play with friends</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  )
}