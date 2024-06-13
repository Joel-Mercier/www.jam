import { FlashList } from "@shopify/flash-list";
import Sound from "./Sound";

export default function SoundList({ sounds }) {
  return (
    <>
      <Sound sound={null} />
      <Sound sound={null} />
      <Sound sound={null} />
      <FlashList
        data={sounds}
        renderItem={({ item }) => <Sound sound={item} />}
        estimatedItemSize={145}
      />
    </>
  )
}