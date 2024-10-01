import { Box } from "@/components/ui/box";
import { TouchableOpacity } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Center } from "../center";
import { tva } from '@gluestack-ui/nativewind-utils/tva';

type FileUploadProps = {
  icon: any;
  label: string;
  className?: string;
};

const fileUploadStyle = tva({
  base: "rounded-3xl overflow-hidden border-2 border-primary-500 bg-background-50 py-8",
})

function FileUpload({ icon, label, className }: FileUploadProps) {
  return (
    <TouchableOpacity>
      <Box className={fileUploadStyle({ class: className})}>
        <VStack>
          <Center>
            <Icon as={icon} className="h-12 w-12 text-primary-500 mb-2" />
            <Text className="text-primary-500 text-center mt-2 font-bold text-lg">{label}</Text>
          </Center>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
}

export { FileUpload };