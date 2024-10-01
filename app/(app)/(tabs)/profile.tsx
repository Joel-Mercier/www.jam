import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { FlashList } from "@shopify/flash-list";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { ArrowUpDown } from "lucide-react-native";
import QuizCard from "@/components/quizzes/QuizCard";
import { ScrollView } from "@/components/ui/scroll-view";
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

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

export default function ProfileScreen() {
  const pager = useRef<PagerView>(null)
  const [page, setPage] = useState<number>(0)

  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="px-4 flex-1">
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
                <Button size="sm" variant="solid" action="primary" className="mr-1">
                  <ButtonText>Edit profile</ButtonText>
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
                <Link href={"/followers"} asChild>
                  <TouchableOpacity className="flex-1 p-2 items-center justify-center">
                    <Heading size="md" numberOfLines={1} className="mb-0">
                      927.3K
                    </Heading>
                    <Text>followers</Text>
                  </TouchableOpacity>
                </Link>
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
              <Button
                size="lg"
                variant={page === 0 ? "solid" : "outline"}
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                className="flex-1 mr-2"
                onPress={() => setPage(0)}
              >
                <ButtonText>Quizzes</ButtonText>
              </Button>
              <Button
                size="lg"
                variant={page === 1 ? "solid" : "outline"}
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                className="flex-1 ml-2"
                onPress={() => setPage(1)}
              >
                <ButtonText>Collections</ButtonText>
              </Button>
              <Button
                size="lg"
                variant={page === 2 ? "solid" : "outline"}
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                className="flex-1 ml-2"
                onPress={() => setPage(2)}
              >
                <ButtonText>About</ButtonText>
              </Button>
            </HStack>
            <Box className="flex-1">
            <PagerView style={{ flex: 1, height: '100%', padding: 16, backgroundColor: 'red' }} initialPage={0} ref={pager} onPageSelected={handlePageSelected}>
              <Box className="flex-1">
                <FlashList
                  nestedScrollEnabled
                  data={DATA}
                  renderItem={({ item }) => <QuizCard quiz={item} />}
                  ListHeaderComponent={(
                    <HStack className="my-8 items-center justify-between">
                      <Heading size="xl">245 quizzes</Heading>
                      <Button size="lg" variant="link" action="primary" className="ml-2">
                        <ButtonText>Default</ButtonText>
                        <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                      </Button>
                    </HStack>
                  )}
                  contentContainerStyle={{ padding: 16 }}
                  showsVerticalScrollIndicator={false}
                  estimatedItemSize={125}
                />
              </Box>
              <FlashList
                data={DATA}
                renderItem={({ item }) => <QuizCard quiz={item} />}
                ListHeaderComponent={(
                  <HStack className="my-8 items-center justify-between">
                    <Heading size="xl">245 quizzes</Heading>
                    <Button size="lg" variant="link" action="primary" className="ml-2">
                      <ButtonText>Default</ButtonText>
                      <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                    </Button>
                  </HStack>
                )}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={125}
              />
              <FlashList
                data={DATA}
                renderItem={({ item }) => <QuizCard quiz={item} />}
                ListHeaderComponent={(
                  <HStack className="my-8 items-center justify-between">
                    <Heading size="xl">245 quizzes</Heading>
                    <Button size="lg" variant="link" action="primary" className="ml-2">
                      <ButtonText>Default</ButtonText>
                      <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                    </Button>
                  </HStack>
                )}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={125}
              />
            </PagerView>
            </Box>
          </VStack>
          
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

