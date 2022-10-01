import React, { useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { CartContext } from "../Contexts/CartContextProvider";
import {
  Box,
  Text,
  Flex,
  HStack,
  Image,
  Grid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Checkbox,
  VStack,
  Button
  
} from "@chakra-ui/react";
import { useContext } from "react";
import { useRef } from "react";

let cardNo="1111222233334444"
let cvv="000"

export default function OrderConfirm() {
  const [pay1, setPay1] = useState(true);
  const [pay2, setPay2] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const { subTotal } = useContext(CartContext);
  const[card, setCard]=useState({cn:"",cvv:"",dt:""})
  const Ref=useRef()

  let handleChange=(e)=>{
const {name, value}=e.target
setCard({...card, [name]:value})
  }

  let handleClick=()=>{
    console.log(card)
    if(card.cn==cardNo&&card.cvv==cvv){
      setCard({cn:"",cvv:"", dt:""})
        alert("Payment Successful")
        
        
    }else{
      setCard({cn:"",cvv:"",dt:""})
        alert("Please provide correct card details")
    }
  }
let{cn,cvv, dt}=card
  return (
    <Box py="20px">
      <Text fontSize={"2xl"} as="b">
        Confirm Your Order Details
      </Text>
      <Box
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        my="20px"
        bg={"white"}
      >
        <Box w="85%" m="auto" py="20px">
          <Flex direction={"column"} gap="15px">
            <Text as="b" fontSize={"xl"}>
              Delivery Details
            </Text>
            <Box>
              <Text as="b">Name</Text>
              <Text>{loginUser.name}</Text>
            </Box>

            <Box>
              <Text as="b">Address</Text>
              <Text>{loginUser.address}</Text>
            </Box>

            <Box>
              <Text as="b">Phone</Text>
              <Text>{loginUser.phone}</Text>
            </Box>

            <Box>
              <Text as="b">Zip</Text>
              <Text>{loginUser.zipcode}</Text>
            </Box>
            <Box>
              <Text as="b">
                Email(We require your email to send you receipts and order
                updates)
              </Text>
              <Text>{loginUser.email}</Text>
            </Box>
          </Flex>
        </Box>
        <Box w="85%" m="auto" py="20px">
          <Flex direction={"column"} gap="15px">
            <Text as="b" fontSize={"xl"}>
              Payment Info
            </Text>
            <Box>
              <HStack>
                <input
                  type="radio"
                  name="method"
                  defaultChecked
                  onChange={() => {setPay2(false); setPay1(true)}}
                ></input>
                <Text>PayPal</Text>
                <Image
                  w="30px"
                  h="20px"
                  src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-paypal-sm_oeazjr"
                />
              </HStack>
              <HStack mt="6px">
                <input
                  type="radio"
                  name="method"
                  onChange={() => setPay2(true)}
                ></input>
                <Text>Credit Card</Text>
                <Image
                  w="30px"
                  h="20px"
                  src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-amex_wdkyqy"
                />
                <Image
                  w="30px"
                  h="20px"
                  src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-discover_dmdrsr"
                />
                <Image
                  w="30px"
                  h="20px"
                  src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-mastercard_fpfsrz"
                />
                <Image
                  w="30px"
                  h="20px"
                  src="https://res.cloudinary.com/freshly/image/upload/q_auto:good,dpr_auto/v1494958610/icon-cc-visa_gbqvb5"
                />
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Box w="85%" m="auto" pt="20px" display={pay2 ? "block" : "none"}>
          <Grid templateColumns={"repeat(2,1fr)"} gap="20px">
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Credit Card Number</FormLabel>
                <Input
                  placeholder="1234 1234 1234 1234"
                  borderRadius={"none"}
                  border="1px"
                  borderColor={"black"}
                  name="cn"
                  onChange={handleChange}
                  value={cn}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel>Expiration</FormLabel>
                <Input
                  placeholder="MM/YY"
                  borderRadius={"none"}
                  border="1px"
                  borderColor={"black"}
                  name="dt"
                  onChange={handleChange}
                  value={dt}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel>CVV</FormLabel>
                <Input
                type={"password"}
                  placeholder="CVV"
                  borderRadius={"none"}
                  border="1px"
                  borderColor={"black"}
                  name="cvv"
                  onChange={handleChange}
                  value={cvv}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Checkbox isChecked={pay1} onChange={() => setPay1(!pay1)} mt="20px">
            Billing info is the same as delivery info
          </Checkbox>
        </Box>
        <Box py="20px" display={pay1 ? "none" : "block"} w="85%" m="auto">
          <FormControl isRequired mb="20px">
            <FormLabel>Payment Name</FormLabel>
            <Input
              placeholder="Name"
              borderRadius={"none"}
              border="1px"
              borderColor={"black"}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Billing Zip</FormLabel>
            <Input
              placeholder="Zip"
              borderRadius={"none"}
              border="1px"
              borderColor={"black"}
            />
          </FormControl>
        </Box>
        <Box w="85%" m="auto">
          <VStack spacing={4}>
            <Flex justifyContent={"space-between"} w="100%">
              <Text as={"b"}>Total</Text>
              <Text as={"b"}>${subTotal}</Text>
            </Flex>
            <Button
              w="100%"
              borderRadius={"none"}
              color="white"
              bg="#2a6dff"
              as="b"
              _hover={{ bg: "#0160C0" }}
              onClick={handleClick}
            >
              Submit Order
            </Button>
          </VStack>
        </Box>
        <Box width={"85%"} textAlign="center" m="auto" py="10px">
          <Text fontSize={"sm"}>You can skip or cancel anytime*</Text>
        </Box>
      </Box>
      <Text fontSize={"sm"}>
        * By submitting this order, you agree to enroll in Freshly’s
        subscription service and to receive weekly deliveries. You will be
        notified each week to modify your subscription before your shipping
        cutoff. See details in Terms and FAQs.
      </Text>
    </Box>
  );
}
