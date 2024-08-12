import { Box } from "@/components/ui/box";
import JamList from "@/components/jams/JamList";

export default function FavoritesScreen() {
  return (
    <Box className="px-4 mt-8">
      <JamList jams={[]} />
    </Box>
  );
}