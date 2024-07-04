import SoundList from "@/components/sounds/SoundList";
import { useSounds } from "@/hooks/www.jam/useSounds";
import { Box, Spinner, Tabs, Text, Toast, ToastDescription, ToastTitle, VStack, useToast, TabsTabList, TabsTab, TabsTabTitle, TabsTabPanels, TabsTabPanel } from "@gluestack-ui/themed";
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
          )
        },
      })
    }
  }, [isError])

  if (isLoading) return <Spinner size="large" />

  return (
    <Box height="100%" px="$4">
      <Tabs>
        <TabsTabList>
          <TabsTab>
            <TabsTabTitle>Test</TabsTabTitle>
          </TabsTab>
          <TabsTab>
            <TabsTabTitle>Test 2</TabsTabTitle>
          </TabsTab>
        </TabsTabList>
        <TabsTabPanels>
          <TabsTabPanel><Text>Test</Text></TabsTabPanel>
          <TabsTabPanel><Text>Test 2</Text></TabsTabPanel>
        </TabsTabPanels>
      </Tabs>
      <SoundList sounds={[null, null, null]} />
    </Box>

  );
}

