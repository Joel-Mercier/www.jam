import { FlashList } from "@shopify/flash-list";
import Sound from "./Sound";

export default function SoundList({ sounds }) {
  return (
    <FlashList
      data={sounds}
      renderItem={({ item }) => <Sound sound={item} />}
      estimatedItemSize={200}
    />
  )
}