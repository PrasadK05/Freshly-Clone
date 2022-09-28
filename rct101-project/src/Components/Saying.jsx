import React from "react";
import { Box, Container,Image, SimpleGrid,Text,  } from "@chakra-ui/react";

export default function Saying() {
  return (
    <Box py="40px" textAlign="center" bg="#fffdf7">
        <Text fontSize="5xl" as="b">What Others Are Saying</Text>
      <Container maxW="6xl" mt="30px">
        <SimpleGrid columns={3} gap="10px" textAlign="center" maxW="full" m="auto">
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              w="200px"
              display="block"
              margin='auto'
            />
            <Text fontSize="xl" mt="20px" >
            Freshly has changed our lives!
            </Text>
            <Text fontSize="sm"  mt="5px">With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.</Text>
            <Text mt="10px">Dave</Text>
          </Box>

          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              w="200px"
              display="block"
              margin='auto'
              
            />
            <Text fontSize="xl"  mt="20px">
            10 stars! Awesome! Love it!
            </Text>
            <Text fontSize="sm" mt="5px">We love Freshly because it takes two minutes to prepare, the food is great and we don't have to spend time cleaning up.</Text>
            <Text mt="10px">Sheri</Text>
          </Box>

          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              w="200px"
              display="block"
              margin='auto'
            />
            <Text fontSize="xl"  mt="20px" >
            One of the easiest decisions I've made
            </Text>
            <Text fontSize="sm" mt="5px">With Freshly, I don't have to think about what I'm going to eat for lunch each day and feel good knowing that I'm eating a healthy meal. I love the convenience!</Text>
            <Text mt="10px">Cindi</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
