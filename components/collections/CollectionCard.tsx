import { Card } from "@/components/ui/card";
import { ImageBackground } from "@/components/ui/image-background";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { LinearGradient } from "../ui/linear-gradient";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Collection } from "@/services/api/www.quiz/collections";

interface Props {
  collection: Collection;
  horizontal?: boolean;
  isLast?: boolean;
}

export default function CollectionCard({ collection, horizontal = false, isLast = false }: Props) {
  return (
    <Link href={{ pathname: "/collections/[id]", params: { id: collection.id } }} asChild>
      <TouchableOpacity>
        <Card className={`p-0 rounded-xl min-h-32 min-w-48 justify-items-end overflow-hidden ${horizontal && !isLast ? 'mr-4' : 'mr-0 mb-4'}`}>
          <ImageBackground src={"https://picsum.photos/300/200"} resizeMode="cover" alt="collection" style={{ flex: 1, justifyContent: 'flex-end', padding: 8 }}>
            <LinearGradient className="absolute bottom-0 left-0 right-0 h-14" colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)']}>
            </LinearGradient>
            <Heading size="md" numberOfLines={1} className="text-white">{collection.name}</Heading>
          </ImageBackground>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}