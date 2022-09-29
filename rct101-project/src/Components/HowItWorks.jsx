import React from 'react'
import {Box, Container, SimpleGrid, Image, Text, Flex} from "@chakra-ui/react"

export default function HowItWorks() {
  return (
    <Box bg="#fef9eb" py="30px">
      <Container maxW="full" centerContent={true} >
        <Text fontSize="5xl" as="b">How It Works</Text>
        <Box >
        <SimpleGrid columns={4} gap="10px" textAlign="center">
            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Image src='https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg' boxSize="200px" display="block" m="auto"></Image>
                <Flex direction="column" gap="5px">
                <Text fontSize="2xl" as="b">Choose Your Meals</Text>
                <Text >Rotating menu of 50+ balanced dishes.</Text>
                </Flex>
            </Box>

            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Image src='https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg' boxSize="200px" display="block" m="auto"></Image>
                <Flex direction="column" gap="5px">
                <Text fontSize="2xl" as="b">We Cook & Deliver</Text>
                <Text>Fully-cooked meals sent fresh, not frozen.</Text>
                </Flex>
            </Box>

            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Image src='https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg' boxSize="200px" display="block" m="auto"></Image>
                <Flex direction="column" gap="5px">
                <Text fontSize="2xl" as="b">Chill & Reheat</Text>
                <Text>Refrigerate meals & reheat in 3 minutes.</Text>
                </Flex>
            </Box>

            <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Image src='https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg' boxSize="200px" display="block" m="auto"></Image>
                <Flex direction="column" gap="5px">
                <Text fontSize="2xl" as="b">Eat & Repeat</Text>
                <Text>Change meals, skip a week, or cancel any time.</Text>
                </Flex>
            </Box>           
        </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
