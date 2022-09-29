import React from 'react'
import {Box, SimpleGrid, Button} from "@chakra-ui/react"
import { useState } from 'react'
import LeftBar from '../Components/LeftBar'

export default function GetStarted() {
    const [exp, setExp]= useState(true)
    let handleClick=()=>{
        setExp(!exp)
    }
  return (
    <Box h={"90vh"} w={'100%'} border={'1px'}>
        <SimpleGrid templateColumns={exp?"15% 60% 25%": "75% 25%"}>
        <Box border={"1px solid black"}h={"90vh"} display={exp? "block" : "none"}>
            <LeftBar/>
        </Box>
            <Box border={"1px solid red"} h={"90vh"}>

            </Box>
            <Box border={"1px solid blue"} h={"90vh"} >last</Box>

        </SimpleGrid>
      
    </Box>
  )
}
