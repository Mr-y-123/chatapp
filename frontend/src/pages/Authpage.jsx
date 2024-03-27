import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Flex, Container, Box, Image, HStack, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Signup from "../components/Signup";
const Authpage = () => {
  const location=useLocation()
  const {pathname}=location
  return (
      <Container maxW={"container.md"} padding={5} marginTop={'100px'}>
        <HStack spacing={"24px"} flexDirection={{base:'column-reverse',md:'row',lg:'row'}}>
          <Box w="350px">
            <Image
              src="https://img.freepik.com/premium-vector/video-chatting-concept-3d-illustration-video-calls-with-friends-online-communication-meeting-with-people-mobile-application-interface-vector-illustration-modern-web-banner-design_198565-1721.jpg?w=996"
              alt="Dan Abramov"
              borderRadius={"10px"}
              height={"351px"}
              boxShadow={'xl'}
            />
          </Box>
          <Box w="400px">
            <Heading mb={4} textAlign={"center"}>
              {pathname==='/signup'?'Sign Up':'Sign In'}
            </Heading>
            {
             pathname==='/signup'?<Signup/>:<LoginForm/>
            }
          </Box>
        </HStack>
      </Container>
  );
};

export default Authpage;
