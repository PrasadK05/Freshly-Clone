import {Image, Box, Text, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function FlexiblePlanCard() {
  return (
    <>
      <Container maxW="6xl" mt="50px" mb="30px">
        <SimpleGrid columns={5} gap="10px" textAlign="center" maxW="full" m="auto">
            <Box>
                <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png'  boxSize="200px"/>
                <Text fontSize="2xl" as="b" color="#357471">4-5 Meals</Text>
            </Box>

            <Box>
                <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png' boxSize="200px"/>
                <Text fontSize="2xl" as="b" color="#357471">6-7 Meals</Text>
            </Box>

            <Box>
                <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png' boxSize="200px"/>
                <Text fontSize="2xl" as="b" color="#357471">8-9 Meals</Text>
            </Box>

            <Box>
                <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png' boxSize="200px" />
                <Text fontSize="2xl" as="b" color="#357471">10-11 Meals</Text>
            </Box>

            <Box>
                <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png' boxSize="200px"/>
                <Text fontSize="2xl" as="b" color="#357471">12 Meals</Text>
            </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
