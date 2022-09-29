import React from 'react'
import {Box, Image, Flex, Text} from "@chakra-ui/react"

export default function FoodCard({name, image,gluten_free, single_serve, calo}) {
  return (
    <Box borderRadius={'10px'} bg="white">
        <Flex direction={"column"} justifyContent="space-between" >
            <Image src={image} borderRadius={'10px'}/>
            <Text as={"b"}>{name}</Text>
            <Text>{calo} | {gluten_free? "Gluten Free": null} | {single_serve? "Single-Serve": null}</Text>
        </Flex>
      
    </Box>
  )
}

