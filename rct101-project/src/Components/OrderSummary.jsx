import React, { useContext } from "react";
import { Box, Flex, Text, Divider, Image } from "@chakra-ui/react";
import { CartContext } from "../Contexts/CartContextProvider";

export default function OrderSummary() {
  const { subTotal, cartData } = useContext(CartContext);
  return (
    <Box  py="20px">
      <Box w="100%" >
        <Text fontSize={"2xl"} as="b">
          Order Summary
        </Text>
        <Box
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          my="20px"
          bg={"white"}
        >
          <Box w="90%" m="auto" py="20px" border={"1px, solid blue"}>
            <Divider />
            <Flex w="100%" justifyContent={"space-between"} py="10px">
              <Text fontSize={"sm"}>{cartData.length} meals</Text>
              <Text fontSize={"sm"} as={"b"}>
                ${subTotal}
              </Text>
            </Flex>
            <Divider />
            <Flex w="100%" justifyContent={"space-between"} py="10px">
              <Text fontSize={"sm"}>Shipping</Text>
              <Text fontSize={"sm"} as={"b"}>
                $0
              </Text>
            </Flex>
            <Divider />
            <Flex w="100%" justifyContent={"space-between"} py="10px">
              <Text as={"b"}>Total</Text>
              <Text as={"b"}>${subTotal}</Text>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box w="100%">
        <Text fontSize={"2xl"} as="b">
          My Meals
        </Text>
        <Box my="20px">
          <Box w="90%" m="auto" py="20px" border={"1px, solid blue"}>
            {cartData.map((el) => {
              return (
                <>
                  <Flex w="100%" py="10px" gap="15px" alignItems={"center"}>
                    <Image
                      src={el.image}
                      alt="error"
                      w="60px"
                      h="60px"
                      borderRadius={"10px"}
                      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                    />
                    <Text as={"b"}>{el.name}</Text>
                  </Flex>
                  <Divider />
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
