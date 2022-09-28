import React from 'react'
import {Box,Flex,Image, VStack,Text,HStack} from "@chakra-ui/react"
export default function Footer() {
  return (
    <Box py="70px">
        <Flex  w="4xl" m="auto" justifyContent="space-between">
            <VStack>
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="error" />
                <Text>© Freshly Inc.</Text>
            </VStack>
            <VStack>
                <Text>Company</Text>
                <Text fontSize="sm" color="#666666">Career</Text>
                <Text fontSize="sm" color="#666666">Contact Us</Text>
                <Text fontSize="sm" color="#666666">Press</Text>
                <Text fontSize="sm" color="#666666">Terms</Text>
                <Text fontSize="sm" color="#666666">Privacy</Text>
                <Text fontSize="sm" color="#666666">Affiliates</Text>
                <Text fontSize="sm" color="#666666">Partnership</Text>
            </VStack>
            <VStack>
                <Text>Learn More</Text>
                <Text fontSize="sm" color="#666666">Plans & Menu</Text>
                <Text fontSize="sm" color="#666666">Why Freshly?</Text>
                <Text fontSize="sm" color="#666666">Gifts</Text>
                <Text fontSize="sm" color="#666666">FAQ's</Text>
                <Text fontSize="sm" color="#666666">Blog</Text>
                <Text fontSize="sm" color="#666666">Students</Text>                
            </VStack>
            <VStack>
                <Text>Join Us</Text>
                <HStack spacing={5} color="#5c5c5c">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
                </HStack>
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d6439d4fb92e7630e46976b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="error" w="120px"/>
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d643dd558306bfe1df5ef8b_google-play-badge.png" alt="error" w="120px" />
            </VStack>


        </Flex>
      
    </Box>
  )
}
