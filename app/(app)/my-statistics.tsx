import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { LineChart } from 'react-native-gifted-charts'
import { Divider } from "@/components/ui/divider";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import { Trophy } from "lucide-react-native";
import colors from "tailwindcss/colors";
import useApp from "@/contexts/app";

const lineData = [{value: 0, label: "Mon"},{value: 20, label: "Tue"},{value: 18, label: "Wed"},{value: 40, label: "Thu"},{value: 36, label: "Fri"},{value: 60, label: "Sat"},{value: 54, label: "Sun"}];

export default function MyStatisticsScreen() {
  const theme = useApp.use.theme();

  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="mx-4 my-4 p-4 border border-background-200 rounded-xl">
          <HStack className="items-center justify-between mb-4">
            <Heading size="xl">Your points this week</Heading>
            <Text size="xl" className="font-semibold">100 pts</Text>
          </HStack>
          <Divider className="mb-4"/>
          <Box className="flex-1">
            <LineChart
              adjustToWidth
              curved
              areaChart
              hideDataPoints
              isAnimated
              animationDuration={1200}
              startFillColor="#6949FF"
              endFillColor1="#6949FF"
              startOpacity={1}
              endOpacity={0.05}
              initialSpacing={0}
              data={lineData}
              spacing={50}
              thickness={5}
              backgroundColor={theme === 'dark' ? '#191A1F' : colors.white}
              // hideAxesAndRules
              yAxisColor={theme === 'dark' ? '#191A1F' : colors.white}
              xAxisColor={theme === 'dark' ? '#191A1F' : colors.white}
              rulesColor={theme === 'dark' ? '#191A1F' : colors.white}
              color="#6949FF"
              yAxisTextStyle={{ color: colors.gray[500], fontFamily: 'Nunito' }}
              xAxisLabelTextStyle={{ color: colors.gray[500], fontFamily: 'Nunito' }}
            />
          </Box>
        </Box>
        <Box className="mx-4 mt-4">
          <Heading size="xl">Your achievements</Heading>
          <VStack className="gap-4 mt-4">
            <HStack className="gap-4">
              <HStack className="flex-1 border border-background-200 rounded-xl p-4 items-center justify-center">
                <Box className="basis-1/4">
                  <Trophy className="h-12 w-12" color={colors.yellow[500]} />
                </Box>
                <VStack className="basis-3/4 ml-1">
                  <Heading size="md" numberOfLines={1}>First collection</Heading>
                  <Text size="sm" numberOfLines={1}>You have created your first collection</Text>
                </VStack>
              </HStack>
              <HStack className="flex-1 border border-background-200 rounded-xl p-4 items-center justify-center">
                <Box className="basis-1/4">
                  <Trophy className="h-12 w-12" color={colors.yellow[500]} />
                </Box>
                <VStack className="basis-3/4 ml-1">
                  <Heading size="md" numberOfLines={1}>First collection</Heading>
                  <Text size="sm" numberOfLines={1}>You have created your first collection</Text>
                </VStack>
              </HStack>
            </HStack>
            <HStack className="gap-4">
              <HStack className="flex-1 border border-background-200 rounded-xl p-4 items-center justify-center">
                <Box className="basis-1/4">
                  <Trophy className="h-12 w-12" color={colors.yellow[500]} />
                </Box>
                <VStack className="basis-3/4 ml-1">
                  <Heading size="md" numberOfLines={1}>First collection</Heading>
                  <Text size="sm" numberOfLines={1}>You have created your first collection</Text>
                </VStack>
              </HStack>
              <HStack className="flex-1 border border-background-200 rounded-xl p-4 items-center justify-center">
                <Box className="basis-1/4">
                  <Trophy className="h-12 w-12" color={colors.yellow[500]} />
                </Box>
                <VStack className="basis-3/4 ml-1">
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