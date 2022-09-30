import React from 'react'
import {Box, VStack, Container, Text, Grid, GridItem, Image} from "@chakra-ui/react"

export default function Lifestyle() {
  return (
    <Box w="100%" py="50px" bg="#fffdf7">
              <Container maxW={"50%"} centerContent={true}>
        <VStack textAlign={"center"} spacing={8}>
          <Text as={"b"} fontSize="5xl">For Every Diet & Lifestyle</Text>
          <Text>
          We’re here to make every dish delicious and nutritious, with prepared meals that satisfy a wide range of tastes—all meticulously crafted to meet your dietary wants and needs.
          </Text>          
        </VStack>
      </Container>
      <Box w="80%" m="auto" textAlign={"center"}>
        <Grid templateColumns={"repeat(5,1fr)"} gap="10px">
            <GridItem>
                <VStack>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03-p-500.png" w="100%"/>
                    <Text as={"b"} fontSize="2xl">Purely Plant</Text>
                    <Text w="220px" fontSize={"md"}>Plant-based meals for everyone</Text>
                    <Text fontSize={"md"} as="u" color={"#3167ff"} fontWeight="bold">Learn More</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05-p-500.png" w="100%"/>
                    <Text as={"b"} fontSize="2xl">Gluten Free</Text>
                    <Text w="220px" fontSize={"md"}>Certified by the Gluten Intolerance Group</Text>
                    <Text fontSize={"md"} as="u" fontWeight={"bold"} color="#3167ff">Learn More</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02-p-500.png" w="100%"/>
                    <Text as={"b"} fontSize="2xl">Dairy Free Meals</Text>
                    <Text w="220px" fontSize={"md"}>Dairy free prepared meals for all tastes</Text>
                    <Text fontSize={"md"} as="u" fontWeight={"bold"} color="#3167ff">Learn More</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01-p-500.png" w="100%"/>
                    <Text as={"b"} fontSize="2xl">Carb-Smart</Text>
                    <Text w="170px" fontSize={"md"}>Chef-crafted low-carb meals</Text>
                    <Text fontSize={"md"} as="u" fontWeight={"bold"} color="#3167ff">Learn More</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04-p-500.png" w="100%"/>
                    <Text as={"b"} fontSize="2xl">Calorie-Conscious</Text>
                    <Text w="220px" fontSize={"md"}>Low-calorie meal plan with perfect portions</Text>
                    <Text fontSize={"md"} as="u" fontWeight={"bold"} color="#3167ff">Learn More</Text>
                </VStack>
            </GridItem>

        </Grid>
      </Box>
      
    </Box>
  )
}
