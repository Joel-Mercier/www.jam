import { FlashList } from "@shopify/flash-list";
import Jam from "./Jam";

export default function SoundList({ jams, horizontal = false }) {
  return (
    <FlashList
      data={jams}
      renderItem={({ item }) => <Jam jam={item} horizontal={horizontal} isLast={item?.id === jams[jams.length - 1]?.id} />}
      estimatedItemSize={145}
      horizontal={horizontal}
    />
  );
}