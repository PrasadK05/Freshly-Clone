import React from 'react'
import {Box, Button, Flex, HStack, Stack, Text} from "@chakra-ui/react"
import { CartContext } from '../Contexts/CartContextProvider'
import { useContext } from 'react'
import RightBarCard from './RightBarCard'
import { Link } from 'react-router-dom'

export default function RightBar() {
    const {cartData, subTotal, clearAll}=useContext(CartContext)

//     if(cartData.length==0){
// document.getElementById("rb").display="none"
//     }
console.log(cartData.length);

  return (
    <>
      <Box w={"100"} h={"50px"} boxShadow= "rgba(0, 0, 0, 0.18) 0px 2px 4px" bg="#fffdf7">
        <Flex justifyContent={"right"} alignItems={"center"} h="100%" px="20px">           
        
        <Text as={"u"} color="#3167ff" onClick={()=>clearAll()} _hover={{cursor:"pointer"}}>Clear All</Text>
        </Flex>
      </Box>
      <Box width={"100%"}  h="72%" id="rb" overflowY={"auto"} padding="10px">
        <Stack spacing={2}>
        {
            cartData.map((el)=>{
                return <RightBarCard
                key={el.id}
                name={el.name}
                id={el.id}
                image={el.image}             
                />
            })
        }
        </Stack>
      </Box>
      <Box width={"100%"}  h="20%" p="20px" borderTopRadius={"20px"} boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
        <Stack spacing={"4"}>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Text as="b">Subtotal: ${subTotal}</Text>
            <HStack fontSize="20px" spacing={4} p="5px" px="10px" borderRadius={"20px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
            <i className="fa-solid fa-cart-shopping"></i>
            <Text>{cartData.length}</Text>
            </HStack>
            </Flex>
            <Button _hover={{bg:"#052EFF"}} borderRadius={"none"} bg={(cartData.length==0)?"#acafb3": "#3167ff"} color={"white"} as="b"><Link to={(cartData.length==0)?null :"/checkout"}>Next</Link></Button>
        </Stack>
      </Box>
    </>
  )
}

// {subTotal}