import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import User from "@/components/users/User";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useRef, useState } from "react";
import PagerView from "react-native-pager-view";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "Fifth Item",
  },
];

export default function FollowersScreen() {
  const pager = useRef<PagerView>(null);
  const [page, setPage] = useState<number>(0);

  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position);
  };

  useEffect(() => {
    pager.current?.setPage(page);
  }, [page]);

  return (
    <SafeAreaView>
      <HStack className="my-4 items-center justify-between">
        <Button size="lg" variant={page === 0 ? "solid" : "outline"} action="primary" className="flex-1 mr-2 ml-4" onPress={() => setPage(0)}>
          <ButtonText>Followers</ButtonText>
        </Button>
        <Button size="lg" variant={page === 1 ? "solid" : "outline"} action="primary" className="flex-1 mr-2" onPress={() => setPage(1)}>
          <ButtonText>Following</ButtonText>
        </Button>
      </HStack>
      <PagerView ref={pager} initialPage={0} onPageSelected={handlePageSelected} style={{ flex: 1 }}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <User user={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 8 }}
          showsVerticalScrollIndicator={false}
        />
        <FlashList
          data={DATA}
          renderItem={({ item }) => <User user={item} />}
          estimatedItemSize={100}
          contentContainerStyle={{ padding: 8 }}
          showsVerticalScrollIndicator={false}
        />
      </PagerView>
        
    </SafeAreaView>
  );
}