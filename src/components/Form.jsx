import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/data/fetchData.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Input,
  Select,
  Container,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import s from "../styles/Form.css";


const formCollectionRef = collection(db, "forms")

export default function Form() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState([]);
  
  
  useEffect(async () => {
    const data = await fetchData();
    
    setFormData(data[0].items);
  }, []);

  const [state, setState] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "Argentina",
    terms_and_conditions: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const timestamp = Timestamp.now();
      await addDoc(formCollectionRef, {...state, timestamp: timestamp});
      setState({
        full_name: "",
        email: "",
        birth_date: "",
        country_of_origin: "",
        terms_and_conditions: "",
      });
      alert("You've submitted the form successfully!");
      navigate("/data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log("STATE ", state);
  };

  return (
    <Stack
      spacing={4}
      w="full"
      maxW="xl"
      bg="white"
      p={8}
      borderRadius="10px"
      marginLeft="40rem"
      marginTop="7rem"
      backgroundColor="#2aaf8361"
    >
      <Heading fontSize="2xl" textAlign="center" background="#2aaf8361" borderRadius="5px">
        Datos Personales
      </Heading>
      <Text fontSize="md" textAlign="center" background="#2aaf8361" fontWeight="bold">
        Completa los siguientes datos
      </Text>
      <form onSubmit={handleSubmit} role="textbox">
      <Flex flexDirection="column">
        {formData.map((field, index) => {
          switch (field.type) {
            case "text":
              return (
                <FormControl id={field.name} role="textbox">
                  <FormLabel>{field.label}</FormLabel>
                  <Input
                    key={field.name}
                    name={field.name}
                    required={field.required}
                    onChange={handleOnChange}
                    placeholder={field.label}
                    role="textbox"
                  />
                </FormControl>
              );
            case "email":
              return (
                <FormControl id={field.name} role="textbox">
                  <FormLabel>Correo electrónico</FormLabel>
                  <Input
                    key={field.name}
                    onChange={handleOnChange}
                    name={field.name}
                    required={field.required}
                    placeholder={field.label}
                    role="textbox"
                  />
                </FormControl>
              );
            case "date":
              return (
                <FormControl id={field.name} role="textbox">
                  <FormLabel>{field.label}</FormLabel>
                  <Input
                    key={field.name}
                    onChange={handleOnChange}
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    role="textbox"
                  />
                </FormControl>
              );
            case "checkbox":
              return (
                <Stack spacing={2}>
                  <Checkbox
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    onChange={handleOnChange}
                    required="on"
                    borderColor="black"
                    width="20rem"
                    marginTop="20px"
                  >
                    {field.label}
                  </Checkbox>
                </Stack>
              );
            case "select":
              return (
                <FormControl id={field.name}>
                  <FormLabel>{field.label}</FormLabel>
                  <Select
                    size="sm"
                    id={field.name}
                    name={field.name}
                    value={state.country_of_origin}
                    onChange={handleOnChange}
                    label={field.label}
                    required={field.required}
                  >
                    {field.options.map((option, index) => (
                      <option key={index} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              );
            case "submit":
              return (
                <Button backgroundColor="#2aaf8361" mt={4} w="full" type={field.type}>
                  Enviar
                </Button>
              );
          }
        })}
        </Flex>
      </form>
    </Stack>
  );
}
