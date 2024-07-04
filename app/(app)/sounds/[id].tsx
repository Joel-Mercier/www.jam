import UserCard from '@/components/users/UserCard';
import { BadgeText, Box, Button, ButtonIcon, ButtonText, Divider, Heading, HStack, Text, VStack, Badge, ScrollView } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams } from 'expo-router';
import { Clock, Gauge, Heart, Music } from 'lucide-react-native';

const collaborators = [{ id: 1, name: "John Doe" }, { id: 2, name: "John Doe" }, { id: 3, name: "John Doe" }]

export default function SoundScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <Box height="100%" px="$4" mb="$8">
        <Heading size="2xl" mb="$2" mt="$4">My awesome song collab with www.jam</Heading>
        <Text size="lg">By Joel Mercier</Text>
        <HStack alignItems='center' justifyContent='space-between'>
          <Button
            size="xs"
            variant="solid"
            action="secondary"
            isDisabled={false}
            isFocusVisible={false}
            mt="$4"
            mb="$4"
          >
            <ButtonIcon as={Heart} mr="$2" />
            <ButtonText>Add to favorites</ButtonText>
          </Button>
          <Text size='sm'>118 people are interested</Text>
        </HStack>
        <VStack overflow='hidden'>
          <HStack py="$2" alignItems="center">
            <Box mr="$6">
              <Gauge color="white" />
            </Box>
            <VStack w="$full" overflow='hidden'>
              <Text py="$2">120 BPM</Text>
              <Divider w="$full" />
            </VStack>
          </HStack>
          <HStack py="$2" alignItems="center">
            <Box mr="$6">
              <Music color="white" />
            </Box>
            <VStack w="$full" overflow='hidden'>
              <Text py="$2">A min</Text>
              <Divider w="$full" />
            </VStack>
          </HStack>
          <HStack py="$2" alignItems="center">
            <Box mr="$6">
              <Clock color="white" />
            </Box>
            <VStack w="$full" overflow='hidden'>
              <Text py="$2">00:16</Text>
              <Divider w="$full" />
            </VStack>
          </HStack>
        </VStack>
        <Heading size="lg" mb="$2" mt="$4">About</Heading>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit dolorem cum officiis nihil quas laborum vero totam. In, inventore doloribus quasi ad accusantium dolorem repudiandae eum alias dolore et.</Text>
        <Heading size="lg" mb="$2" mt="$4">Vibe</Heading>
        <HStack flexWrap="wrap" flexDirection="row" alignItems="center" mt="$4" space="sm">
          <Badge size="md" variant="outline" borderRadius="$none" action="muted">
            <BadgeText>Piano</BadgeText>
          </Badge>
          <Badge size="md" variant="outline" borderRadius="$none" action="muted">
            <BadgeText>Chill</BadgeText>
          </Badge>
          <Badge size="md" variant="outline" borderRadius="$none" action="muted">
            <BadgeText>Pop</BadgeText>
          </Badge>
        </HStack>
        <Heading size="lg" mb="$2" mt="$4">Collaborators</Heading>
        <FlashList
          data={collaborators}
          renderItem={({ item }) => <UserCard user={item} horizontal={true} isLast={item?.id === collaborators[collaborators.length - 1]?.id} />}
          estimatedItemSize={145}
          horizontal={true}
        />
      </Box>
    </ScrollView>
  )
}