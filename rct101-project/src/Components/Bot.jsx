import React from 'react'
import {Image,Box} from "@chakra-ui/react"

export default function Bot() {
  return (
    <Box w="50px" h="50px" bg="white" position="sticky"  borderRadius="25px" zIndex="1000">
      <Image src="https://static.ada.support/images/1445d110-5561-4cc0-870b-0f69880cec49.svg" alt="error" />
    </Box>
  )
}
