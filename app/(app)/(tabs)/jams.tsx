import { VStack } from "@/components/ui/vstack";
import { Toast, ToastDescription, ToastTitle, useToast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";
import { Box } from "@/components/ui/box";
import SoundList from "@/components/jams/JamList";
import { useJams } from "@/hooks/www.jam/useJams";
import React, { useEffect } from "react";

export default function JamsScreen() {
  const toast = useToast()
  const { data: sounds, isLoading, isError } = useJams({})

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
      <SoundList jams={[null, null, null]} />
    </Box>
  );
}

