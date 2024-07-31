import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { BadgeText, Badge } from "@/components/ui/badge";
import UserCard from '@/components/users/UserCard';
import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams } from 'expo-router';
import { Clock, Gauge, Heart, Music } from 'lucide-react-native';
import { useHeaderHeight } from '@react-navigation/elements';

const collaborators = [{ id: 1, name: "John Doe" }, { id: 2, name: "John Doe" }, { id: 3, name: "John Doe" }]

export default function SoundScreen() {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView>
      <Box className="h-full px-4 mt-8 mb-8" style={{ paddingTop: headerHeight }}>
        <Heading size="2xl" className="mb-2">My awesome song collab with www.jam</Heading>
        <Text size="lg">By Joel Mercier</Text>
        <HStack className="items-center justify-between">
          <Button
            size="xs"
            variant="solid"
            action="secondary"
            isDisabled={false}
            isFocusVisible={false}
            className="mt-4 mb-4">
            <ButtonIcon as={Heart} className="mr-2" />
            <ButtonText>Add to favorites</ButtonText>
          </Button>
          <Text size='sm'>118 people are interested</Text>
        </HStack>
        <VStack className="overflow-hidden">
          <HStack className="items-center">
            <Box className="mr-6">
              <Gauge color="white" />
            </Box>
            <VStack className="w-full overflow-hidden">
              <Text className="py-2">120 BPM</Text>
              <Divider className="w-full" />
            </VStack>
          </HStack>
          <HStack className="items-center">
            <Box className="mr-6">
              <Music color="white" />
            </Box>
            <VStack className="w-full overflow-hidden">
              <Text className="py-2">A min</Text>
              <Divider className="w-full" />
            </VStack>
          </HStack>
          <HStack className="items-center">
            <Box className="mr-6">
              <Clock color="white" />
            </Box>
            <VStack className="w-full overflow-hidden">
              <Text className="py-2">00:16</Text>
              <Divider className="w-full" />
            </VStack>
          </HStack>
        </VStack>
        <Heading size="lg" className="mb-2 mt-4">About</Heading>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>

        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>

        <Heading size="lg" className="mb-2 mt-4">Vibe</Heading>
        <HStack space="sm" className="flex-wrap flex-row items-center mt-4">
          <Badge size="md" variant="outline" action="muted" className="rounded-none">
            <BadgeText>Piano</BadgeText>
          </Badge>
          <Badge size="md" variant="outline" action="muted" className="rounded-none">
            <BadgeText>Chill</BadgeText>
          </Badge>
          <Badge size="md" variant="outline" action="muted" className="rounded-none">
            <BadgeText>Pop</BadgeText>
          </Badge>
        </HStack>
        <Heading size="lg" className="mb-2 mt-4">Collaborators</Heading>
        <FlashList
          data={collaborators}
          renderItem={({ item }) => <UserCard user={item} horizontal={true} isLast={item?.id === collaborators[collaborators.length - 1]?.id} />}
          estimatedItemSize={145}
          horizontal={true}
        />
      </Box>
    </ScrollView>
  );
}