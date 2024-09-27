import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { ArrowUpDown, ChevronDown } from "lucide-react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import QuizCard from "@/components/quizzes/QuizCard";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Divider } from "@/components/ui/divider";

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

export default function UserScreen() {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <Box className="flex-1">
        <FlashList
          data={DATA}
          renderItem={({ item }) => <QuizCard quiz={item} />}
          ListHeaderComponent={(
            <VStack className="mt-8">
              <Image source={{ uri: "https://picsum.photos/300/150" }} className="w-full h-[150px] rounded-xl" alt="collection" />
              <HStack className="items-center justify-between mt-8 mb-4">
                <HStack className="items-center">
                  <Avatar size="lg">
                    <AvatarFallbackText>Joel Mercier</AvatarFallbackText>
                  </Avatar>
                  <VStack className="ml-4">
                    <Heading size="xl" numberOfLines={1} className="mb-0">
                      Joel Mercier
                    </Heading>
                    <Text>@joel.mercier</Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Button size="sm" variant="outline" action="primary" className="mr-1">
                    <ButtonText>Following</ButtonText>
                  </Button>
                </HStack>
              </HStack>
              <Divider />
              <VStack className="my-4">
                <HStack className="items-center justify-between mb-4">
                  <VStack className="flex-1 p-2 items-center justify-center border-r-2 border-background-50">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      126
                    </Heading>
                    <Text>quizzes</Text>
                  </VStack>
                  <VStack className="flex-1 p-2 items-center justify-center">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      32M
                    </Heading>
                    <Text>plays</Text>
                  </VStack>
                  <VStack className="flex-1 p-2 items-center justify-center border-l-2 border-background-50">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      274M
                    </Heading>
                    <Text>players</Text>
                  </VStack>
                </HStack>
                <Divider />
                <HStack className="items-center justify-between mt-4">
                  <VStack className="flex-1 p-2 items-center justify-center border-r-2 border-background-50">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      49
                    </Heading>
                    <Text>collections</Text>
                  </VStack>
                  <VStack className="flex-1 p-2 items-center justify-center">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      927.3K
                    </Heading>
                    <Text>followers</Text>
                  </VStack>
                  <VStack className="flex-1 p-2 items-center justify-center border-l-2 border-background-50">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      126
                    </Heading>
                    <Text>quizzes</Text>
                  </VStack>
                </HStack>
              </VStack>
              <Divider />
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
  )
}