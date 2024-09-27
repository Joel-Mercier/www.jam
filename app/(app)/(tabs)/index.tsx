import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "@/components/ui/safe-area-view"
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react-native";
import { FlashList } from "@shopify/flash-list";
import UserCard from "@/components/users/UserCard";
import { ScrollView } from "@/components/ui/scroll-view";
import CollectionCard from "@/components/collections/CollectionCard";
import QuizCard from "@/components/quizzes/QuizCard";
import { Link } from "expo-router";

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

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <VStack>
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Discover</Heading>
            <Link href="/discover" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          <FlashList
            data={DATA}
            renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
            horizontal
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
          />
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top authors</Heading>
            <Link href="/top-authors" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          <FlashList
            data={DATA}
            renderItem={({ item }) => <UserCard user={item} horizontal />}
            horizontal
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
          />
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top collections</Heading>
            <Link href="/top-collections" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          <FlashList
            data={DATA}
            renderItem={({ item }) => <CollectionCard collection={item} horizontal />}
            horizontal
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
          />
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Trending quizzes</Heading>
            <Link href="/trending-quizzes" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          <FlashList
            data={DATA}
            renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
            horizontal
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
          />
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top picks</Heading>
            <Link href="/top-picks" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          <FlashList
            data={DATA}
            renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
            horizontal
            estimatedItemSize={100}
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

