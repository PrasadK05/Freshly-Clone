import React from "react";
import { CartContext } from "../Contexts/CartContextProvider";
import {
  Box,
  Text,
  Stack,
  HStack,
  Radio,
  Image,
  RadioGroup,
  Input,
  Flex
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export default function LeftBar({exp}) {
  const [query, setQuery]= useState("All")
  const {getData}= useContext(CartContext)

  let handleChange=(e)=>{
    setQuery(e.target.value)  
  }
  useEffect(()=>{
    getData(query)
  },[query])


  return (
    <>
      <Box w={"100"} h={"50px"} boxShadow= "rgba(0, 0, 0, 0.18) 0px 2px 4px" px="20px" bg="#fffdf7">
        <Flex alignItems={"center"} h="100%" >
        <Text as={"b"}>Filter By :</Text>
        </Flex>
      </Box>
      <Box w={"100%"} bg="white"  mt="3px" px="20px"> 
        <Text as="b">Categories</Text>
        <Stack direction={"column"} spacing={3} mt={"10px"}>
          <HStack spacing={3}>
           
            <input type="radio" name="filter" value="All" onChange={handleChange} c/>

            <Image
              src="https://res.cloudinary.com/freshly/image/upload/w_22,h_26/v1617112144/full-menu_3x_tjseuc.png"
              alt="error"
              w={"25px"}
              bg="#fffdf7"
            />
            <Text>Full Menu</Text>
          </HStack>

          <HStack spacing={3}>
            <input type="radio" name="filter" value="purely_plant" onChange={handleChange}/>

            <Image
              src="https://res.cloudinary.com/freshly/image/upload/v1626368012/production-weekly-menu-section-image-df7515f7-9745-497e-80f7-035d653ccaff.png"
              alt="error"
              w={"25px"}
              bg="#fffdf7"
            />
            <Text>Purely Plant</Text>
          </HStack>

          <HStack spacing={3}>
            <input type="radio" name="filter" value="signature_collection" onChange={handleChange}/>

            <Image
              src="https://res.cloudinary.com/freshly/image/upload/v1610576008/production-weekly-menu-section-image-cfe122a2-0a30-4276-af7e-87034e316e3e.png"
              alt="error"
              w={"25px"}
              bg="#03514e"
            />
            <Text>Signature Collection</Text>
          </HStack>

          <HStack spacing={3}>
            <input type="radio" name="filter" value="freshly_fit" onChange={handleChange}/>
            <Image
              src="https://res.cloudinary.com/freshly/image/upload/v1610576009/production-weekly-menu-section-image-8dbbc60a-71ff-422b-bbbd-2f5f39723f52.png"
              alt="error"
              w={"25px"}
              bg="yellow"
            />
            <Text>FreshlyFit</Text>
          </HStack>

          <HStack spacing={3}>
            <input type="radio" name="filter"  value="protins_slides" onChange={handleChange}/>
            <Image
              src="https://res.cloudinary.com/freshly/image/upload/v1617663486/production-weekly-menu-section-image-96c9cd78-c10d-493f-81f6-72f856ceed18.png"
              alt="error"
              w={"25px"}
              bg="#fffdf7"
            />
            <Text>Proteins & Sides</Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}
