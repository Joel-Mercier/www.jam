import { VStack } from "@/components/ui/vstack";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";
import { Box } from "@/components/ui/box";
import SoundList from "@/components/sounds/SoundList";
import { useSounds } from "@/hooks/www.jam/useSounds";
import React, { useEffect } from "react";

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
              <VStack space="xs">
                <ToastTitle>Error</ToastTitle>
                <ToastDescription>
                  Couldn't fetch your sounds, try again later.
                </ToastDescription>
              </VStack>
            </Toast>
          );
        },
      })
    }
  }, [isError])

  if (isLoading) return <Spinner size="large" />

  return (
    <Box className="h-[100%] px-4 mt-8">
      <SoundList sounds={[null, null, null]} />
    </Box>
  );
}

