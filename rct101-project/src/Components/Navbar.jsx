import React from "react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContextProvider";
import {
  Box,
  Flex,  
  ButtonGroup,
  Button,
  Image,
  HStack,
  useDisclosure,
  IconButton,
  Stack
} from "@chakra-ui/react";
import { useContext } from "react";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {isAuth, logoutme, loginUser}= useContext(AuthContext)
    const navigate=useNavigate()

    let handleClick=()=>{
      if(isAuth==true){
        logoutme()
      }else{
        navigate("/login")
      }
    }
    let handleClick2=()=>{
      if(isAuth==true){
        return
      }else{
        navigate("/signup")
      }
    }
  return (
    <Box pos="sticky" top={0} zIndex="1000" boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px">
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      justifyContent="space-between"
      bg="#fffdf7"
      h={{base:"50px", md:"50px", lg:"80px"}}
      px="40px"
    >
      <Box p="2">
        <Image
          src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
          alt="error"
          boxSize="100px"
          onClick={()=> navigate("/")}
          cursor="pointer"
        />
      </Box>
      <HStack as={"nav"} spacing={{md:1}} display={{ base: "none", md: "flex" }}>
        <Button size="sm" bg="#fffdf7">
          Price & Menu
        </Button>
        <Button size="sm" bg="#fffdf7">
          How it Works
        </Button>
        <Button size="sm" bg="#fffdf7">
          Gifts
        </Button>
        <Button size="sm" bg="#fffdf7">
          Refer a Friend
        </Button>
        <Button size="sm" bg="#fffdf7">
          Help
        </Button>
      </HStack>

      <ButtonGroup gap={{base:1, md:1}} display={{ base: "none", md: "flex" }}>
        
        <Button size="sm" bg="#fffdf7" onClick={handleClick}>
          {isAuth ? "Logout" : "Login"}
        </Button>
        
        <Button bg="#3167ff" color="white" size="sm" borderRadius="none" onClick={handleClick2} _hover={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
        {isAuth ? loginUser.name : "Sign Up"}
        </Button>
      </ButtonGroup>

      <IconButton
            size={{base:"sm", md:"md"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
         
    </Flex>
    <Box>
    {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4}>
            <Button size="sm" bg="#fffdf7">
          Price & Menu
        </Button>
        <Button size="sm" bg="#fffdf7">
          How it Works
        </Button>
        <Button size="sm" bg="#fffdf7">
          Gifts
        </Button>
        <Button size="sm" bg="#fffdf7">
          Refer a Friend
        </Button>
        <Button size="sm" bg="#fffdf7">
          Help
        </Button>
        <Button size="sm" bg="#fffdf7">
          Login
        </Button>
        <Button bg="#3167ff" color="white" size="sm" w="70px" >
          Sign Up
        </Button>
            </Stack>
          </Box>
        ) : null}
    </Box>
    </Box>
  );
}
