import { Grid, Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContextProvider'
import MiddleCards from './MiddleCards'

export default function MiddleBar({exp, handleClick}) {
    const {foods} = useContext(CartContext)

  return (
    <>
    <Box w={"100"} h={"50px"} boxShadow= "rgba(0, 0, 0, 0.18) 0px 2px 4px" pos="sticky" top="0px" zIndex={"800"} bg="#fffdf7">
        <Flex justifyContent={"flex-end"} h="100%">
        <Button h="100%" borderRadius={"none"} color="#2a6dff" bg="#fef9eb" _hover={{bg:"#2a6dff", color:"white"}} onClick={()=> handleClick()}>{exp? "Hide Filter": "Sort & Filter"}</Button>
        </Flex>
      </Box>
    <Grid w="100%" templateColumns={exp?"repeat(3,1fr)": "repeat(4,1fr)"} p="20px" gap="10px">
{foods.map((el)=>{
    return <MiddleCards
    key={el.id}
    name={el.name}
    calo={el.calo}
    price={el.price}
    image={el.image}
    id={el.id}
    />
})}
    </Grid>
      
    </>
  )
}
