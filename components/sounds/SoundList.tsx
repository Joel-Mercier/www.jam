import { FlashList } from "@shopify/flash-list";
import Sound from "./Sound";

export default function SoundList({ sounds, horizontal = false }) {
  return (
    <FlashList
      data={sounds}
      renderItem={({ item }) => <Sound sound={item} horizontal={horizontal} isLast={item?.id === sounds[sounds.length - 1]?.id} />}
      estimatedItemSize={145}
      horizontal={horizontal}
    />
  )
}