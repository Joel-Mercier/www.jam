import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import SoundList from "@/components/jams/JamList";

export default function HomeScreen() {
  return (
    <Box className="h-[100%] px-4 mt-8">
      <Heading size="lg" className="mb-2">Recently viewed</Heading>
      <SoundList horizontal jams={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
      <SoundList jams={[null, null, null]} />
    </Box>
  );
}

