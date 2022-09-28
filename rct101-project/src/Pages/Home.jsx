import React from 'react'
import {Box} from "@chakra-ui/react"
import BalanceMeal from '../Components/BalanceMeal'
import HowItWorks from '../Components/HowItWorks'
import FlexiblePlans from '../Components/FlexiblePlans'
import Saying from '../Components/Saying'
import Cont1 from '../Components/Cont1'
import Cont2 from '../Components/Cont2'
import Partner from '../Components/Partner'


export default function Home() {
  return (
    <Box>
      <BalanceMeal/>
      <HowItWorks/>
      <FlexiblePlans/>
      <Saying/>
      <Cont1/>
      <Cont2/>
      <Partner/>
      
    </Box>
  )
}
