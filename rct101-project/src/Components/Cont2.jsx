import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Container, Text, Image, Button, Grid, Input, Stack} from "@chakra-ui/react"

export default function Cont2() {
  return (
    <Box px="60px" >
      <Grid templateColumns="repest(1,1fr)" w="full" pos="relative" mb="20px"  justifyContent="left">
        <Box >
        <Container
          position="absolute"
          zIndex="99"
          left="700px"
          top="170px"
          maxW="2xl"
          px="30px"
          py="40px"
          bg="white"
        >
          <Box lineHeight="30px" mb="20px">
            <Text as="b" fontSize="5xl">
            Healthy Meals Delivered Weekly
            </Text>
          </Box>
          <Stack lineHeight="20px" mt="15px" spacing={3} >
            <Input placeholder='freshly@freshly.com' type="email" borderRadius={"none"}/>
            <Input placeholder='zip' type="number" borderRadius={"none"}/>
          <Button
            h="40px"
            w="300px"
            color="white"
            bg="#3167ff"
            borderRadius="none"
            mt="30px"
            _hover={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}
            >
            <Link to="/get-started">Get Statrted</Link>
          </Button>
              </Stack>
              <Box mt="20px">
                <Text fontSize="sm">Already have an account? <Link to="/login"><Text as="u" color={"#3167ff"}>Login</Text></Link></Text>                
                <Text fontSize="sm">By continuing, you agree to our Terms and Privacy Policy.& will receive emails from Freshly.</Text>
              </Box>
        </Container>
        </Box>

        <Box >
          <Image
            src="https://media.istockphoto.com/photos/refrigerator-picture-id185121839?k=20&m=185121839&s=612x612&w=0&h=nnWnhm2tKJINsKHb2QbUAyw5p5cqS-6dtFE1RuQMWnw="
            alt="error" w="5xl"/>
            </Box>
      </Grid>
    </Box>
  )
}
