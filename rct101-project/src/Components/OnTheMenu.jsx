import React from "react";
import { Box, Text, Container, Grid, GridItem, Button } from "@chakra-ui/react";
import FoodCard from "./FoodCard";

let Data = [
  {
    id: 1,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809eae991696388751312b_production-meal-image-61221a9e-23cf-4042-a8ff-c15cc1493807.jpeg",
    name: "Creamy Marinara Lentil Pasta",
    calo: 520,
    gluten_free: true,
    single_serve: true,
    price: 14,
  },
  {
    id: 2,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bbc22f95e9869522b32a_production-meal-image-857e178e-6526-43e2-a8f3-7b8eb178c3c1.jpeg",
    name: "Veggie-Loaded Burrito Bake",
    calo: 650,
    gluten_free: true,
    single_serve: true,
    price: 13,
  },
  {
    id: 3,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bbc82326df305ac39b81_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0.jpeg",
    name: "Thai Green Curry Bowl",
    calo: 390,
    gluten_free: true,
    single_serve: true,
    price: 12,
  },
  {
    id: 4,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bbcea5fd15c67f92fa8e_production-meal-image-c2bd7c69-3db7-40c1-8740-e86f50357fcb.jpeg",
    name: "Indian-Spiced Red Lentil Dal",
    calo: 620,
    gluten_free: true,
    single_serve: true,
    price: 15,
  },
  {
    id: 5,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62e62221067a93ade7fbf480_production-meal-image-060ecc01-fb56-4074-85b9-15716062e146.jpeg",
    name: "Coconut Purple Rice Porridge",
    calo: 350,
    gluten_free: true,
    single_serve: true,
    price: 15,
  },
  {
    id: 6,
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb5ce576ad86fd7fd56c_production-meal-image-d5ef4016-ed9b-4aac-93e1-109ae9b9b6ba.jpeg",
    name: "Philly-ish Cheesesteak",
    calo: 540,
    gluten_free: true,
    single_serve: true,
    price: 14,
  },
];

export default function OnTheMenu() {
  return (
    <Box
      w={"full"}
      h="auto"
      border={"1px"}
      backgroundImage="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=600"
      bgSize={"cover"}
      py="50px"
    >
      <Container maxW={"50vw"} bg="white" margin={"auto"} py={"30px"} px={"30px"}>
        <Text as={"b"} fontSize={"5xl"} color="black" >
          On The Menu
        </Text>
        <Text fontSize={"lg"}>
          Each Freshly meal is perfectly sized for 1 person to enjoy at 1
          sitting. Our fully-prepared meals are delivered fresh, and ready to
          eat in 3 minutes.
        </Text>
        <Box mt={"30px"}>
          <Grid
            templateColumns={"repeat(3,1fr)"}
           
            w={"100%"}
            margin={"auto"}
            gap="40px 20px"
          >
            {Data.map((el) => {
              return (
                <GridItem key={el.id} borderRadius={'10px'}>
                  <FoodCard
                    name={el.name}
                    gluten_free={el.gluten_free}
                    single_serve={el.single_serve}
                    image={el.image}
                    calo={el.calo}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Button w={"100%"} borderRadius="none" mt={6} bg="#3167ff" color={"white"} _hover={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>View Paln & Menu</Button>
      </Container>
    </Box>
  );
}

