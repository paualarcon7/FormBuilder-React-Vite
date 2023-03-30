import React, { useEffect, useState, ReactFragment } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";

const formCollectionRef = collection(db, "forms");

export default function FormData() {
  const [state, setState] = useState([]);

  useEffect(async () => {
    const q = query(formCollectionRef, orderBy("timestamp", "desc"), limit(1));
    const data = await getDocs(q);
    const lastData = data.docs[0];
    const doc = lastData.data();
    setState([doc]);
  }, []);

  //console.log("im state ", state)

  return (
    <React.Fragment>
      <Flex
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "10rem",
          float: "left",
          marginLeft: "26rem"
        }}
      >
        {console.log("im state ", state)}
        {state.length
          ? state.map((el) => {
              return (
                <Stack
                  spacing={4}
                  w="full"
                  maxW="xl"
                  bg="white"
                  p={8}
                  borderRadius="10px"
                  backgroundColor="#2aaf8361"
                >
                  <Box
                    p={5}
                    shadow="md"
                    borderWidth="4px"
                    borderColor="white"
                    borderRadius="10px"
                    color="black"
                  >
                    <Heading fontSize="xl"> Nombre: {el.full_name} </Heading>
                    <Text mt={4}>Email: {el.email}</Text>
                    <Text mt={4}>Fecha de nacimiento: {el.birth_date}</Text>
                    <Text mt={4}>País: {el.country_of_origin}</Text>
                  </Box>
                </Stack>
              );
            })
          : "Loading..."}
      </Flex>
    </React.Fragment>
  );
}
