import React, { useContext } from 'react'
import {Box , Button, Flex, Image, Text, HStack, Skeleton} from "@chakra-ui/react"
import { CartContext } from '../Contexts/CartContextProvider'

export default function MiddleCards({image,name,calo,price, id}) {
const {cartFunc, loading}=useContext(CartContext)
    let handleClick=(data)=>{
cartFunc(data)
    }

  return (
    <Skeleton isLoaded={loading}>
        <Box borderRadius={'10px'} bg="white" boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"} overflow={"hidden"}>
        <Flex direction={"column"} justifyContent="space-between" gap={"10px"}>
            <Image src={image} borderTopRadius="10px" _hover={{transform:"scale(1.1)", transition:"0.3s"}}/>
        <Box width={"100%"} px="15px" mb="20px">
            <Text as={"b"}>{name}</Text>
            <Text>{calo} Cal</Text>
            
            <Flex justifyContent={"space-between"} alignItems="center">
                <Text>Price: {price}$</Text>
                {/* <HStack border={"1px"} spacing="0" borderRadius={"50px"}> */}
                {/* <Button borderRadius={"50%"} bg="white">-</Button> */}
                {/* <Button borderRadius={"50%"} bg="white">1</Button> */}
                <Button borderRadius={"50%"} textAlign="center" onClick={()=>handleClick({name,price,image})} fontSize="30px" as={"b"} color="white" bg="#3167ff" w={"50px"} h="50px" _hover={{bg:"#0927A3"}}>+</Button>                
                {/* </HStack> */}
            </Flex>
            </Box>
        </Flex>
      
    </Box>
    </Skeleton>
  )
}
