import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger } from "@/components/ui/accordion";
import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import PagerView from "react-native-pager-view";

const DATA = [
  {
    title: "General",
  },
  {
    title: "Music",
  },
  {
    title: "Quizzes",
  },
  {
    title: "Collections",
  },
];

export default function HelpCenterScreen() {
  const [page, setPage] = useState<number>(0)
  const pager = useRef<PagerView>(null)
  
  const handlePageSelected = (e: any) => {
    setPage(e.nativeEvent.position)
  }

  useEffect(() => {
    pager.current?.setPage(page)
  }, [page])

  return (
    <SafeAreaView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-8 mb-4">
          <Button size="lg" variant={page === 0 ? "solid" : "outline"} action="primary" className="mr-2 ml-4" onPress={() => setPage(0)}>
            <ButtonText>General</ButtonText>
          </Button>
          <Button size="lg" variant={page === 1 ? "solid" : "outline"} action="primary" className="mr-2" onPress={() => setPage(1)}>
            <ButtonText>Account</ButtonText>
          </Button>
          <Button size="lg" variant={page === 2 ? "solid" : "outline"} action="primary" className="mr-2" onPress={() => setPage(2)}>
            <ButtonText>Quizzes</ButtonText>
          </Button>
          <Button size="lg" variant={page === 3 ? "solid" : "outline"} action="primary" className="mr-2" onPress={() => setPage(3)}>
            <ButtonText>Collections</ButtonText>
          </Button>
          <Button size="lg" variant={page === 4 ? "solid" : "outline"} action="primary" className="mr-2" onPress={() => setPage(4)}>
            <ButtonText>How to play</ButtonText>
          </Button>
          <Button size="lg" variant={page === 5 ? "solid" : "outline"} action="primary" className="mr-4" onPress={() => setPage(5)}>
            <ButtonText>General</ButtonText>
          </Button>
        </ScrollView>
        <PagerView ref={pager} initialPage={0} onPageSelected={handlePageSelected} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>

            <Accordion size="lg" variant="unfilled" type="multiple" isCollapsible={true} isDisabled={false}  className="mt-4 px-4">
              <AccordionItem value="a" className="border border-background-100 rounded-xl mb-4">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            How do I place an order?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} className="ml-3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} className="ml-3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    To place an order, simply select the products you want, proceed to
                    checkout, provide shipping and payment information, and finalize
                    your purchase.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" className="border border-background-100 rounded-xl">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            What payment methods do you accept?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} className="ml-3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} className="ml-3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    We accept all major credit cards, including Visa, Mastercard, and
                    American Express. We also support payments through PayPal.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion size="lg" variant="unfilled" type="multiple" isCollapsible={true} isDisabled={false}  className="mt-4 px-4">
              <AccordionItem value="a" className="border border-background-100 rounded-xl mb-4">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            How do I place an order?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} className="ml-3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} className="ml-3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    To place an order, simply select the products you want, proceed to
                    checkout, provide shipping and payment information, and finalize
                    your purchase.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" className="border border-background-100 rounded-xl">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            What payment methods do you accept?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} className="ml-3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} className="ml-3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    We accept all major credit cards, including Visa, Mastercard, and
                    American Express. We also support payments through PayPal.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollView>
        </PagerView>
    </SafeAreaView>
  );
}