import CollectionCard from "@/components/collections/CollectionCard";
import QuizCard from "@/components/quizzes/QuizCard";
import { Box } from "@/components/ui/box";
import { ButtonText, ButtonIcon, Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Fab } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { VStack } from "@/components/ui/vstack";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { ArrowUpDown, Plus } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";

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

export default function LibraryScreen() {
  const [page, setPage] = useState<number>(0)
  const [secondPage, setSecondPage] = useState<number>(0)
  const pager = useRef<PagerView>(null)
  const secondPager = useRef<PagerView>(null)

  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position)
  }

  const handleSecondPageSelected = (e: any) => {
    setSecondPage(e.nativeEvent.position)
  }

  useEffect(() => {
    pager.current?.setPage(page)
  }, [page])

  useEffect(() => {
    secondPager.current?.setPage(secondPage)
  }, [secondPage])

  return (
    <SafeAreaView>
      <VStack className=" mx-4 mt-8 pb-4 border-b-2 border-background-50">
        <HStack className="items-center justify-between">
          <Center className="flex-1">
            <TouchableOpacity onPress={() => setPage(0)}>
              <Heading className={`${page === 0 ? 'text-primary-500' : 'text-background-400'}`} size="md">My quizzes</Heading>
            </TouchableOpacity>
          </Center>
          <Center className="flex-1">
            <TouchableOpacity onPress={() => setPage(1)}>
              <Heading className={`${page === 1 ? 'text-primary-500' : 'text-background-400'}`} size="md">Favorites</Heading>
            </TouchableOpacity>
          </Center>
          <Center className="flex-1">
            <TouchableOpacity onPress={() => setPage(2)}>
              <Heading className={`${page === 2 ? 'text-primary-500' : 'text-background-400'}`} size="md">Collaborations</Heading>
            </TouchableOpacity>
          </Center>
        </HStack>
      </VStack>
      <PagerView style={{ flex: 1 }} initialPage={0} ref={pager} onPageSelected={handlePageSelected}>
        <Box className="">
          <HStack className="px-4 my-8 items-center justify-between">
            <Button
              size="lg"
              variant={secondPage === 0 ? "solid" : "outline"}
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="flex-1 mr-2"
              onPress={() => setSecondPage(0)}
            >
              <ButtonText>Quizzes</ButtonText>
            </Button>
            <Button
              size="lg"
              variant={secondPage === 1 ? "solid" : "outline"}
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="flex-1 ml-2"
              onPress={() => setSecondPage(1)}
            >
              <ButtonText>Collections</ButtonText>
            </Button>
          </HStack>
          <PagerView style={{ flex: 1 }} initialPage={0} ref={secondPager} onPageSelected={handleSecondPageSelected}>
            <FlashList
              data={DATA}
              renderItem={({ item }) => <QuizCard quiz={item} />}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={(    
                <HStack className="mb-8 items-center justify-between">
                  <Heading size="xl">245 quizzes</Heading>
                  <Button size="lg" variant="link" action="primary" className="ml-2">
                    <ButtonText>Default</ButtonText>
                    <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                  </Button>
                </HStack>
              )}
            />
            <Box>
              <Link href="/new-collection" asChild>
                <Fab
                  size="lg"
                  placement="bottom right"
                  isHovered={false}
                  isDisabled={false}
                  isPressed={false}
                >
                  <Plus color="white" />
                </Fab>
              </Link>
              <FlashList
                data={DATA}
                renderItem={({ item }) => <CollectionCard collection={item} />}
                estimatedItemSize={100}
                numColumns={2}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                  <HStack className="mb-8 items-center justify-between">
                    <Heading size="xl">245 collections</Heading>
                    <Button size="lg" variant="link" action="primary" className="ml-2">
                      <ButtonText>Default</ButtonText>
                      <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                    </Button>
                  </HStack>
                )}
              />
            </Box>
          </PagerView>
        </Box>
        <Box className="">
          <FlashList
            data={DATA}
            renderItem={({ item }) => <QuizCard quiz={item} />}
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
              <HStack className="mb-8 items-center justify-between">
                <Heading size="xl">245 favorites</Heading>
                <Button size="lg" variant="link" action="primary" className="ml-2">
                  <ButtonText>Default</ButtonText>
                  <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                </Button>
              </HStack>
            )}
          />
        </Box>
        <Box className="">
          <FlashList
            data={DATA}
            renderItem={({ item }) => <QuizCard quiz={item} />}
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
              <HStack className="mb-8 items-center justify-between">
                <Heading size="xl">245 collaborations</Heading>
                <Button size="lg" variant="link" action="primary" className="ml-2">
                  <ButtonText>Default</ButtonText>
                  <ButtonIcon as={ArrowUpDown} className="h-6 w-6 text-primary-500 ml-1" />
                </Button>
              </HStack>
            )}
          />
        </Box>
       
      </PagerView>
    </SafeAreaView>
  );
}

