import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import * as Application from 'expo-application';
import useApp from "@/contexts/app";

export default function AboutScreen() {
  const theme = useApp.use.theme()
  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="px-4 mt-8">
          <Center>
            <Image source={theme === 'dark' ? require('@/assets/images/logo-dark.png') : require('@/assets/images/logo-light.png')} className="w-32 h-32" resizeMode="contain" alt="logo" />
            <Heading size="xl">www.quiz v{Application.nativeApplicationVersion}</Heading>
          </Center>
        </Box>
       
      </ScrollView>
    </SafeAreaView>
  );
}