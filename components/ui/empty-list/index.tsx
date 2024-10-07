import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function EmptyList() {
  return (
    <Box className="flex-1 items-center justify-center">
      <Text>No data available</Text>
    </Box>
  );
}