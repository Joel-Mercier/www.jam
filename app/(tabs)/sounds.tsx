import SoundList from "@/components/sounds/SoundList";
import { useSounds } from "@/hooks/www.jam/useSounds";
import { Box, Spinner, Toast, ToastDescription, ToastTitle, VStack, useToast } from "@gluestack-ui/themed";
import { useEffect } from "react";

export default function SoundsScreen() {
  const toast = useToast()
  const { data: sounds, isLoading, isError } = useSounds({})

  useEffect(() => {
    if (isError) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          const toastId = "toast-" + id
          return (
            <Toast nativeID={toastId} action="error" variant="accent">
              <VStack space="xs" flex={1}>
                <ToastTitle>Error</ToastTitle>
                <ToastDescription>
                  Couldn't fetch your sounds, try again later.
                </ToastDescription>
              </VStack>
            </Toast>
          )
        },
      })
    }
  }, [isError])

  if (isLoading) return <Spinner size="large" />

  return (
    <Box height="100%">
      <SoundList sounds={sounds} />
    </Box>

  );
}

