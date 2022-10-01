import { Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Heading() {
  return (
    <Box h="30px" display={{ base: "none", sm: "none", md: "block" }}>
      <Flex justifyContent="center" alignItems="cemter">
        <ButtonGroup>
          <Button bg="white" size="sm" borderBottom={1}>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
              alt="error"
              boxSize="70px"
            />
          </Button>
          <Button bg="white" size="sm">
            <Image
              src="https://assets.website-files.com/62839ae5aa29cd65804a310c/6284e21e7c53ee06f2daa3f6_freshlywell-white-logo.svg"
              alt="error"
              boxSize="70px"
              _hover={{ color: "blue" }}
            />
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
