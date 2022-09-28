import React from 'react'
import FlexiblePlanCard from './FlexiblePlanCard'
import {Box, Text, Image, Stack, Container, Button} from "@chakra-ui/react"

export default function FlexiblePlans() {
  return (
    <Box py="50px" bg="#fffdf7">
      <Container centerContent={true} maxW="full">
      
        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="error" h="60px" w="250px" display="block" m="auto" />
        
            <Text  mt="0px" fontSize="5xl" as="b">Flexible plans that fit your life</Text>
            <Text w="4xl">We offer anywhere from 4-12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you'll save</Text>
            <Text> and you can always pause or change your plan at any time</Text>
<FlexiblePlanCard/>
            <Text fontSize="xs" mb="30px">Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>

            <Button w="150px" backgroundColor="#3167ff" color="white" h="45px" borderRadius="none" textAlign="center">Sign Up Now</Button>
        
      </Container>
    </Box>
  )
}
