import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";
import { Link } from "expo-router";
import SlideThree from "@/assets/images/undraw_people_re_8spw.svg"
import SlideTwo from "@/assets/images/undraw_outer_space_re_u9vd.svg"
import SlideOne from "@/assets/images/undraw_completed_tasks_vs6q.svg"
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { useState } from "react";

export default function StartScreen() {
  const [index, setIndex] = useState<number>(0);

  return (
    <SafeAreaView>
      <VStack className="flex-1" space="xl">
        <PagerView
          style={{ flex: 1}}
          initialPage={0}
        >
        <VStack key={1} className="flex-1 items-center justify-around p-4">
          <SlideOne style={{ width: '100%', height: '100%', maxHeight: 400 }} />
          <Heading size="2xl" className="text-center">Create, share and play quizzes whenever and wherever you want</Heading>
        </VStack>
        <VStack key={2} className="flex-1 items-center justify-around p-4">
          <SlideTwo style={{ width: '100%', height: '100%', maxHeight: 400 }} />
          <Heading size="2xl" className="text-center">Find fun and interesting quizzes to boost up your knowledge</Heading>
        </VStack>
        <VStack key={3} className="flex-1 items-center justify-around p-4">
          <SlideThree style={{ width: '100%', height: '100%', maxHeight: 400 }} />
          <Heading size="2xl" className="text-center">Play and take quiz challenges together with your friends</Heading>
        </VStack>

        </PagerView>
        <HStack className="items-center justify-center" space="md">
          <Box className={`w-2 h-2 rounded-full bg-background-300 ${index === 0 ? 'bg-primary-500' : 'bg-background-300'}`}></Box>
          <Box className="w-2 h-2 rounded-full bg-background-300"></Box>
          <Box className="w-2 h-2 rounded-full bg-background-300"></Box>
        </HStack>
        <VStack className="p-4" space="xl">
          <Divider />
          <Link href="/sign-up" asChild>
            <Button size="xl" variant="solid" action="primary">
              <ButtonText className="uppercase text-base">Get started</ButtonText>
            </Button>
          </Link>
          <Link href="/login" asChild>
            <Button size="xl" variant="solid" action="secondary">
              <ButtonText className="uppercase text-base">I already have an account</ButtonText>
            </Button>
          </Link>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}