import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CartContext } from "../Contexts/CartContextProvider";
import FoodCard from "./FoodCard";

export default function OnTheMenu2() {
  const [query, setQuery] = useState("All");
  const { getData, foods } = useContext(CartContext);

  let handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    getData(query);
  }, [query]);

  return (
    <Box w="100%" py="50px">
      <Container maxW={"50%"} centerContent={true}>
        <VStack textAlign={"center"} spacing={8}>
          <Text as={"b"} fontSize="5xl">On the Menu</Text>
          <Text>
            Whatever your lifestyle, Freshly's got you covered—with gluten-free,
            dairy-free, plant-based, carb-smart, and calorie-conscious meal
            options! Our heat-&-eat breakfasts, low-lift lunches, and
            done-for-you dinners provide an effortless alternative to everyday
            cooking, with nutritious prepared meals delivered fresh to your
            door. Explore this week's dishes and start eating better:
          </Text>
          <HStack>
            <Text>Menu category:</Text>
            <select
              style={{ width: "180px", fontSize: "14px", border: "1px solid black" }}
              onChange={handleChange}
            >
              <option value={"All"}>All Meal</option>
              <option value={"purely_plant"}>Purely Plant</option>
              <option value={"signature_collection"}>
                Signature Collection
              </option>
              <option value={"freshly_fit"}>Freshly Fit</option>
              <option value={"protins_slides"}>Proteins & Sides</option>
            </select>
          </HStack>
        </VStack>
      </Container>
      <Box w={"85%"} m="auto" mt={"40px"}>
        <Grid w="100%" templateColumns={"repeat(4,1fr)"} gap="20px 10px">
          {foods.map((el) => {
            return (
              <GridItem key={el.id}>
                <FoodCard
                  name={el.name}
                  gluten_free={el.gluten_free}
                  single_serve={el.single_serve}
                  image={el.image}
                  calo={el.calo}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
