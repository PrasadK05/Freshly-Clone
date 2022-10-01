import React from "react";
import {
  Box,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

export default function CommonQ() {
  return (
    <Box w="70%" m="auto">
      <VStack>
        <Text fontSize={"5xl"} as="b">Common Questions</Text>

        <Accordion allowToggle={true} w="100%" allowMultiple={false} >
  <AccordionItem >
    <h2>
      <AccordionButton _hover={{bg:"white"}} >
        <Box flex='1' textAlign='left' fontSize={"md"} color="#3167ff" as="b" >
        How many servings are your meals?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
        <VStack spacing={4}>
    <Text>With a selection that spans nourishing breakfasts, lunches, and dinners, the majority of our meals are single serving and perfectly sized for 1 person to enjoy at 1 sitting. We also offer multi-serve proteins and sides, which are designed to feed multiple people for extra mealtime flexibility. These delicious, ready-to-heat options can help you bulk up existing meals, simplify home cooking, or even build an entire meal—the choice is yours!</Text>

  <Text> We offer anywhere from 4-12 meals per week, with meals as low as $8.99 each—and you always have the freedom to flex your number of meals up each week to add on breakfast items*, which are unlocked upon your second order. On average, our meals weigh in at about 13 ounces and range from 300 to 650 calories. If you have a larger household, we do offer a 12 meal per week subscription (it's ideal for couples or a family of 4 looking for 3 meals per week). Plus, you can always order multiple subscriptions. We may be biased, but there's no better feeling than a fridge full of Freshly! *Each breakfast item counts towards your 12-meal maximum.</Text>  
  </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg:"white"}}>
        <Box flex='1'  textAlign='left' fontSize={"md"} color="#3167ff" as="b">
        Do you accommodate dietary preferences?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
        <VStack spacing={4}>
    <Text>We accommodate a variety of dietary preferences, including gluten-free, dairy-free, peanut-free, plant-based, low-calorie, and carb-conscious options. As a customer, you can set your own dietary preferences and easily find the meals that work for you. You can also check out individual ingredient lists for each dish if you have specific concerns, or chat with one of our Menu Experts for help making selections. You can find their hours and contact options here. If you’re unable to place an order that fits your preferences now, be sure to check back frequently as we’re always adding new and exciting dishes</Text> 
    <Text>‍Please note: Our Menu Experts are not healthcare providers and are unable to provide medical advice. We always recommend consulting your physician or nutritionist if you have any specific health concerns.</Text>
    </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg:"white"}}>
        <Box flex='1' textAlign='left' fontSize={"md"} color="#3167ff" as="b">
        How long do the meals last?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
    Our meals are chef prepared and delivered fresh, so typically they have a refrigerated shelf life of about 3-5 days. Select items (such as seafood) are best eaten first, so we’ll add a badge on the package to let you know. We usually suggest enjoying these meals within the first few days of receiving your order, but you can always check their exact use-by date on the back-of-pack nutrition label. If you’re ever unable to finish your meals within their shelf life, you can always pop them into the freezer for extended storage. Just be sure to microwave your meal straight from the freezer and add a few extra minutes to reach the 165° F internal temperature we recommend
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg:"white"}}>
        <Box flex='1' textAlign='left' fontSize={"md"} color="#3167ff" as="b">
        How do I heat up my meals?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
    Your meals will come to you fully prepared so you just have to heat ‘em up in the microwave. On the back of each meal, you’ll find our easy steps for heating, but generally, the meals heat up in about 3 minutes (depending on your microwave). If you’re unsure, start at 2 minutes and heat in 30–second increments until the meal reaches an inner temperature of 165° F. Our meals are packaged to be heated in the microwave (for the ultimate convenience), but you can heat them in the oven if you’d like. Just so you know, our current meal containers aren’t safe for the oven or stovetop, so you’ll have to transfer your food to heat it up. You can check out the full oven reheat directions in our FAQs.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _hover={{bg:"white"}}>
        <Box flex='1' textAlign='left' fontSize={"md"} color="#3167ff" as="b">
        How does shipping work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
    To help guarantee your meals arrive in the freshest condition, there is a small shipping fee associated with your order. We deliver to all states within the continental U.S., and our shipping partners offer delivery every day of the week. The exact days that we can reach you will depend on your ZIP code and the carrier delivering your Freshly meals. Whether you're signing up or updating your typical delivery day, we'll show you all the days available to you so you can choose what's best for you.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem >
    <h2>
      <AccordionButton _hover={{bg:"white"}} >
        <Box flex='1' textAlign='left' fontSize={"md"} color="#3167ff" as="b">
        How does subscription work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"sm"}>
    Every week you get to pick your selection of meals from our weekly rotation of 35+ options. Choose any number of meals between 4 and 12 per week, with meals as low as $9.58 each. You'll pick the most convenient delivery day for you, and we'll ship your chef-cooked meals right to your doorstep! If you ever need to skip or cancel a week, or size your order up or down, it's easy to make changes to your upcoming delivery before the weekly deadline.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Box  w="100%" textAlign={"center"} py="30px">
<Text fontSize={"4xl"}>Have other questions?</Text>
<Text as="u" color={"#3167ff"}>Visit Our FAQs</Text>
</Box>
      </VStack>
    </Box>
  );
}
