import { Box } from "@/components/ui/box";
import SoundList from "@/components/sounds/SoundList";

export default function FavoritesScreen() {
  return (
    <Box className="px-4 mt-8">
      <SoundList sounds={[]} />
    </Box>
  );
}