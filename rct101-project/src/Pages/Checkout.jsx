import React from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react"
import OrderConfirm from '../Components/OrderConfirm'
import OrderSummary from '../Components/OrderSummary'
import CommonQ from "../Components/CommonQ"

export default function Checkout() {
  return (<>
    <Box w="100%"  bg="#fffdf7">
      <Box w="70%"  m="auto">
      <SimpleGrid templateColumns={"57% 40%"} gap="3%">
        <OrderConfirm/>
        <OrderSummary/>
      </SimpleGrid>
      </Box>
    </Box>
    <CommonQ/>
    </>
  )
}
