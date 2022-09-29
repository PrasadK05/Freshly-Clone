import React from 'react'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Text,
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
  import { AuthContext } from '../Contexts/AuthContextProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

  let initData= {
    email:"",
    password:""
  }

export default function Login() {
    const [data, setData]= React.useState(initData)
    const {loginme, isAuth, error, getData}= useContext(AuthContext)
    const navigate= useNavigate()

    let hnadleChange=(e)=>{
        let {name,value}=e.target
        setData({...data, [name]:value})
    }
    let handleClick=(e)=>{   
        e.preventDefault()     
        loginme(data)
        document.getElementById("f").reset()     
    }

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("userData")) || [];
        getData(user)
    },[])
 useEffect(()=>{
    if(isAuth==true){
        alert("login successful")
        navigate("/")
    }
 },[isAuth])
  return (
    <Box>        
    <Flex
    minH={'70vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
    >
    <Stack
      spacing={4}
      w={'full'}
      maxW={'xl'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}      
      p={6}
      my={12}
      borderRadius="none">
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl', lg:"5xl" }} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleClick} id="f">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          type="email"
          name='email'
          onChange={hnadleChange}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password"
        name='password'
        onChange={hnadleChange}
        />
      </FormControl>
      <Stack spacing={6}>
        <Input
        type="submit"
        placeholder='Log In'
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
          borderRadius="none"
          mt={4}
          value="Log In"    
          />          
      </Stack>
      </form>
      <Flex justify={"space-between"}>
        <Text>Forgot Password</Text>
        <Text>Dont't have an account? Get Started</Text>
      </Flex>
    </Stack>
  </Flex>
  </Box>
  )
}



  
  