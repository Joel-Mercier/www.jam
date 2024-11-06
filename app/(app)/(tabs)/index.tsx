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
import { useQuizzes } from "@/hooks/www.quiz/useQuizzes";
import { ActivityIndicator } from "react-native";
import { useCollections } from "@/hooks/www.quiz/useCollections";
import EmptyList from "@/components/ui/empty-list";
import { useUsers } from "@/hooks/www.quiz/useUsers";

export default function HomeScreen() {
  const { data: quizzes, isLoading: isQuizzesLoading } = useQuizzes({limit: 12, isPublic: true, sort: "created_at_desc", relations: ['user']})
  const { data: topAuthors, isLoading: isTopAuthorsLoading } = useUsers({limit: 12, sort: "created_at_desc"})
  const { data: collections, isLoading: isCollectionsLoading } = useCollections({limit: 12, isPublic: true, sort: "created_at_desc"})
  const { data: trendingQuizzes, isLoading: isTrendingQuizzesLoading } = useQuizzes({limit: 12, isPublic: true, sort: "created_at_desc", relations: ['user']})
  const { data: topPicks, isLoading: isTopPicksLoading } = useQuizzes({limit: 12, isPublic: true, sort: "created_at_desc", relations: ['user']})
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          {isQuizzesLoading ? (
            <ActivityIndicator size="large" color="#009688" />
          ) : (
            <FlashList
              data={quizzes?.data || []}
              renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
              horizontal={(quizzes?.data?.length || 0) > 0}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          )}
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top authors</Heading>
            <Link href="/top-authors" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          {isTopAuthorsLoading ? (
            <ActivityIndicator size="large" color="#009688" />
          ) : (
            <FlashList
              data={topAuthors?.data || []}
              renderItem={({ item }) => <UserCard user={item} horizontal />}
              horizontal={(topAuthors?.data?.length || 0) > 0}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          )}
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top collections</Heading>
            <Link href="/top-collections" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          {isCollectionsLoading ? (
            <ActivityIndicator size="large" color="#009688" />
          ) : (
            <FlashList
              data={collections?.data || []}
              renderItem={({ item }) => <CollectionCard collection={item} horizontal />}
              horizontal={(collections?.data?.length || 0) > 0}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          )}
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Trending quizzes</Heading>
            <Link href="/trending-quizzes" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          {isTrendingQuizzesLoading ? (
            <ActivityIndicator size="large" color="#009688" />
          ) : (
            <FlashList
              data={trendingQuizzes?.data || []}
              renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
              horizontal={(trendingQuizzes?.data?.length || 0) > 0}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          )}
          <HStack className="mb-2 mt-4 items-center justify-between px-4">
            <Heading size="xl">Top picks</Heading>
            <Link href="/top-picks" asChild>
              <Button size="lg" variant="link" action="primary" className="ml-2">
                <ButtonText>View all</ButtonText>
                <ButtonIcon as={ArrowRightIcon} className="h-6 w-6 text-primary-500 ml-1" />
              </Button>
            </Link>
          </HStack>
          {isTopPicksLoading ? (
            <ActivityIndicator size="large" color="#009688" />
          ) : (
            <FlashList
              data={topPicks?.data || []}
              renderItem={({ item }) => <QuizCard quiz={item} horizontal />}
              horizontal={(topPicks?.data?.length || 0) > 0}
              estimatedItemSize={100}
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<EmptyList />}
            />
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

