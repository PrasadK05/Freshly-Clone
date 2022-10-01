import React from "react";
import { Box, Container, Grid, Text, Image, Button } from "@chakra-ui/react";

export default function Cont1() {
  return (
    <Box px="60px" mb="80px">
      <Grid templateColumns="repest(1,1fr)" w="full" pos="relative" mb="20px"  justifyContent="right">
        <Box >
        <Container
          position="absolute"
          zIndex="99"
          left="60px"
          top="170px"
          maxW="3xl"
          px="30px"
          py="40px"
          bg="white"
        >
          <Box lineHeight="30px">
            <Text as="b" fontSize="5xl">
              We believe eating right should be easy for everyone.
            </Text>
          </Box>
          <Box lineHeight="20px" mt="15px">
            <Text>
              Each Freshly meal is perfectly sized for 1 person to enjoy at 1
              sitting. Our fully-prepared meals are delivered fresh, and ready
              to eat in 3 minutes.
            </Text>
          </Box>
          <Button
            h="40px"
            w="150px"
            color="white"
            bg="#3167ff"
            borderRadius="none"
            mt="30px"
            _hover={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}
          >
            Learn More
          </Button>
        </Container>
        </Box>

        <Box >
          <Image
            src="https://www.foodiesfeed.com/wp-content/uploads/2022/06/feasting-on-vietnamese-traditional-food-1024x683.jpg.webp"
            alt="error"
            h="600px"
          ></Image>
        </Box>
      </Grid>
    </Box>
  );
}
