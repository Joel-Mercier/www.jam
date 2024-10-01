import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { LineChart } from 'react-native-gifted-charts'
import { Divider } from "@/components/ui/divider";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";

const lineData = [{value: 0, label: "Test"},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}];

export default function MyStatisticsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="mx-4 my-4 p-4 border border-background-200 rounded-xl">
          <HStack className="items-center justify-between mb-4">
            <Heading size="xl">Your points this week</Heading>
            <Text size="xl" className="font-semibold">100 pts</Text>
          </HStack>
          <Divider />
          <LineChart
            curved
            areaChart
            hideDataPoints
            isAnimated
            animationDuration={1200}
            startFillColor="#6949FF"
            startOpacity={1}
            endOpacity={0.3}
            initialSpacing={0}
            data={lineData}
            spacing={30}
            thickness={5}
            hideAxesAndRules
            yAxisColor="#6949FF"
            xAxisColor="#6949FF"
            color="#6949FF"
          />
        </Box>
        <Box className="mx-4 mt-4">
          <Heading size="xl">Your achievements</Heading>
          <VStack className="gap-4 mt-4">
            <HStack className="gap-4">
              <HStack className="flex-1 border border-background-200 rounded-xl p-2 items-center justify-center">
                <Image source={{ uri: "https://picsum.photos/20/20" }} className="flex-1/3 h-12 w-12" alt="achievement" />
                <VStack className="flex-2/3 ml-1">
                  <Heading size="md" numberOfLines={1}>First collection</Heading>
                  <Text size="sm" numberOfLines={1}>You have created your first collection</Text>
                </VStack>
              </HStack>
              <HStack className="flex-1 border border-background-200 rounded-xl p-2 items-center justify-center">
                <Image source={{ uri: "https://picsum.photos/20/20" }} className="flex-1/3 h-12 w-12" alt="achievement" />
                <VStack className="flex-2/3 ml-1">
                  <Heading size="md" numberOfLines={1}>First collection</Heading>
                  <Text size="sm" numberOfLines={1}>You have created your first collection</Text>
                </VStack>
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}