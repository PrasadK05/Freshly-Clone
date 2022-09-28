import React from 'react'
import {Box, Button, Container, Flex, SimpleGrid, GridItem, HStack, Text, VStack, Input} from "@chakra-ui/react"

export default function BalanceMeal() {
  return (
    <Box w={{base:"full", sm:"full", md: "full"}}>
        <SimpleGrid columns={{base:1, md:1, lg:2}} row={{base:1, md:1, lg:1}} h="700px">
            <Box pos={{lg:"relative"}} display={{base:"none", sm:"none", md:"none", lg:"block"}} backgroundImage="https://static3.depositphotos.com/1007676/229/i/450/depositphotos_2295557-stock-photo-chopsticks-holding-oriental-noodles.jpg" bgSize="cover"><Text pos="absolute" right="0px" bottom="0px" fontSize="2xl" w="3xs" as="b" color="white">Delivered to you fresh, not frozen.</Text></Box>
            <Box bg="#85e5c6" >         
                  <VStack w="full" centerContent={false} alignItems="start" pl="20px" spacing="20px">
                    <Text fontSize={{base:"3xl", sm:"4xl", md:"6xl", lg:"6xl"}} as="b" color="black">Balanced meals</Text>
                    <Text fontSize={{base:"3xl", sm:"4xl", md:"6xl", lg:"6xl"}} as="b" color="black" mt="0">for busy lives.</Text>
                    <Button borderRadius="none" w={{base:"80px", sm:"100px", md:"150px", lg:"170px"}} color="#2a6dff" border="2px" mt="40px" fontSize={{base:"1xs", sm:"1xs"}}>Explore Meals</Button>
                    <VStack alignItems="start"spacing="10px">
                        <Text fontSize="lg" as="b">See meals available in your area!</Text>
                        <HStack>
                            <Box>
                                <Text fontSize="sm" as="b">Email Address</Text>
                                <Input type="email" placeholder='freshly@freshly.com' backgroundColor="white"/>
                            </Box>
                            <Box>
                                <Text fontSize="sm" as="b">Zip Code</Text>
                                <Input type="number" placeholder='11111' backgroundColor="white"/>
                            </Box>
                        </HStack>
                        <Button borderRadius="none" w="200px" backgroundColor="#2a6dff" color="white">Get Started</Button>
                        <Text fontSize="sm" w="sm">By continuing, you agree to our Terms and Privacy Policy & will receive emails from Freshly.</Text>
                    </VStack>
                  </VStack>
            </Box>
        </SimpleGrid>
      
     </Box>
  )
}


// backgroundImage="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb6cea9e2c276a62bc87_production-meal-image-4e60254a-6b6e-461b-9ec7-a25a2035949f-p-500.jpeg"

// {{base:'repeat(1,1fr)', md:'repeat(1,1fr)', lg:'repeat(2,1fr)'}}
// templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)', md:'repeat(1,1fr)', lg:'repeat(2,1fr)'}}
// h={{base:"300px", sm:"400px", md:"500px", lg:"700px"}}
// backgroundImage="https://static3.depositphotos.com/1007676/229/i/450/depositphotos_2295557-stock-photo-chopsticks-holding-oriental-noodles.jpg" bgSize="cover" borderRadius="none"