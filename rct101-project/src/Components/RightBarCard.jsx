import { Flex, Box, Button, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContextProvider'

export default function RightBarCard({name,id, image}) {

    let {delCart}= useContext(CartContext)

    let handleClick=(id)=>{
delCart(id)
    }

  return (
    <Box w="100%" _hover={{bg:"#d1d1d1"}}  p={"15px"}>
      <Flex justifyContent={"space-between"} alignItems="center">
        {/* <Image w="50px" src={image} alt="error"/> */}
        <Text as={'b'}>{name}</Text>
        <Button onClick={()=>handleClick(id)} bg="transperant" _hover={{bg:"#d1d1d1"}}><i className="fa-solid fa-trash-can"></i></Button>
      </Flex>
    </Box>
  )
}
