import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image"
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Question } from "@/services/api/www.quiz/questions";

interface Props {
  question: Question;
  isLast?: boolean;
}

export default function QuestionCard({ question, isLast = false }: Props) {
  return (
    <Card className="p-0 rounded-xl overflow-hidden mb-4">
      <Box className="flex-row">
        <Box>
          <Image
            source={{ uri: "https://picsum.photos/200/120" }}
            className="w-[120px] h-full"
            alt="question"
          />
        </Box>
        <VStack className="p-4 border-2 border-b-4 border-background-50 flex-1 border-l-0">
          <Heading className="mb-2" size="md" numberOfLines={1}>{question.questionType.name}</Heading>
          <HStack className="items-center mb-2">
            <Text className="text-sm">{question.title}</Text>
          </HStack>      
        </VStack>
      </Box>
    </Card>
  );
}