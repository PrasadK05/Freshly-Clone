import React from 'react'
import {Box, SimpleGrid, Button} from "@chakra-ui/react"
import { useState } from 'react'
import LeftBar from '../Components/LeftBar'
import MiddleBar from '../Components/MiddleBar'
import RightBar from '../Components/RightBar'

export default function GetStarted() {
    const [exp, setExp]= useState(false)
    let handleClick=()=>{
        setExp(!exp)
    }
  return (
    <Box h={"85vh"} w={'100%'} boxShadow= "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px">
        <SimpleGrid templateColumns={exp?"15% 60% 25%": "75% 25%"}>
        <Box  h={"85vh"} display={exp? "block" : "none"}>
            <LeftBar           
            />
        </Box>
            <Box  h={"85vh"} overflowY="auto" pos={"relative"} >
                <MiddleBar
                exp={exp}
                handleClick={handleClick}
                />

            </Box>
            <Box  h={"85vh"} >
                <RightBar/>
            </Box>

        </SimpleGrid>
      
    </Box>
  )
}
