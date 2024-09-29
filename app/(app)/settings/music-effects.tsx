import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Switch } from "@/components/ui/switch";
import { VStack } from "@/components/ui/vstack";
import colors from "tailwindcss/colors";

export default function MusicEffectsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <VStack className="px-4">
          <HStack className="items-center justify-between mt-8 mb-4">
            <Heading size="lg" className="font-semibold">Music</Heading>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{ false: colors.gray[50], true: "#6949FF" }}
              thumbColor={"#FFF"}
              activeThumbColor={"#FFF"}
              ios_backgroundColor={colors.gray[50]}
            />
          </HStack>
          <HStack className="items-center justify-between my-4">
            <Heading size="lg" className="font-semibold">Sound effects</Heading>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{ false: colors.gray[50], true: "#6949FF" }}
              thumbColor={"#FFF"}
              activeThumbColor={"#FFF"}
              ios_backgroundColor={colors.gray[50]}
            />
          </HStack>
          <HStack className="items-center justify-between my-4">
            <Heading size="lg" className="font-semibold">Animation effects</Heading>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{ false: colors.gray[50], true: "#6949FF" }}
              thumbColor={"#FFF"}
              activeThumbColor={"#FFF"}
              ios_backgroundColor={colors.gray[50]}
            />
          </HStack>
          <HStack className="items-center justify-between my-4">
            <Heading size="lg" className="font-semibold">Visual effects</Heading>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{ false: colors.gray[50], true: "#6949FF" }}
              thumbColor={"#FFF"}
              activeThumbColor={"#FFF"}
              ios_backgroundColor={colors.gray[50]}
            />
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}