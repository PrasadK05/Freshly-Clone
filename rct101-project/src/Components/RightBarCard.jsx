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
    <Box w="100%"  p={"0px"} py="10px">
      <Flex justifyContent={"space-between"} alignItems="center">
        <Image src={image} alt="error" h="50px" w="60px" borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" _hover={{transform:"scale(1.1)", transition:"0.3s"}}/>
        <Text as={'b'} _hover={{textShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>{name}</Text>
        <Button onClick={()=>handleClick(id)} bg="transperant" _hover={{bg:"#d1d1d1"}}><i className="fa-solid fa-trash-can"></i></Button>
      </Flex>
    </Box>
  )
}
