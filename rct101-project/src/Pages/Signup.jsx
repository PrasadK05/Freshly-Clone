import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
 
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,  
  Text
  
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

let initData = {
  name: "",
  address: "",
  password: "",
  email: "",
  zipcode: "",
  phone:""
};
let users = JSON.parse(localStorage.getItem("userData")) || [];
export default function Signup() {
  const [userData, setUserData] = useState(initData);
const ref= useRef()
const navigate=useNavigate()

  let handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  let handleClick = (e) => {
    e.preventDefault()
    let {name,password, address,email,zipcode}=userData
    if(name==""||password==""||email==""||zipcode==""||address==""){
        
        return 
    }
      users = [...users, userData];
      localStorage.setItem("userData", JSON.stringify(users))
      setUserData(initData);
      alert("Signup successful")
      document.getElementById("f").reset()
      navigate("/login")
  };
  
  
  
  return (     

    <Box>        
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          p={6}
          my={12}
          borderRadius="none"
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
            textAlign="center"
          >
            Signup
          </Heading>
          <form id="f" onSubmit={handleClick}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter Name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="name"
                onChange={handleChange}
                ref={ref}
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Enter Address"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="address"
                ref={ref}
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <FormControl id="zip" isRequired>
              <FormLabel>Zip Code</FormLabel>
              <Input
                placeholder="Enter Zip Code "
                _placeholder={{ color: "gray.500" }}
                type="number"
                name="zipcode"
                ref={ref}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                ref={ref}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                placeholder="phone number"
                _placeholder={{ color: "gray.500" }}
                type="tel"
                name="phone"
                ref={ref}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                ref={ref}
                onChange={handleChange}
              />
            </FormControl>
          
         
            <Input
            type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              borderRadius="none"
              mt={4}
            />         
          
          </form>
          <Flex justify={"space-between"}>
            <Text>Already have an account? <Link to="/login"><Text as="u" color={"#4299e1"}>Login</Text></Link></Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
