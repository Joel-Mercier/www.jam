import SoundList from "@/components/sounds/SoundList";
import { Box } from "@gluestack-ui/themed";

export default function FavoritesScreen() {
  return (
    <Box px="$4">
      <SoundList sounds={[]} />
    </Box>
  )
}