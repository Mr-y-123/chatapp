import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignup } from "../utils/validation";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaSignup) });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={"20px"}>
          <FormControl isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter Username"
              {...register("username")}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter Email"
              {...register("email")}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword.password ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password")}
              />
              <InputRightElement
                width="4rem"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: showPassword.password === true ? false : true,
                  })
                }
              >
                {showPassword.password ? <BiSolidShow /> : <BiSolidHide />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword}>
            <FormLabel>Confirm-password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword.confirmPassword ? "text" : "password"}
                placeholder="Enter Confirm password"
                {...register("confirmPassword")}
              />
              <InputRightElement
                width="4rem"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirmPassword:
                      showPassword.confirmPassword === true ? false : true,
                  })
                }
              >
                {showPassword.confirmPassword ? (
                  <BiSolidShow />
                ) : (
                  <BiSolidHide />
                )}
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>
              {errors.confirmPassword && errors.confirmPassword.message}
            </FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" size="sm" type="submit">
            Sign Up
          </Button>
          <Text fontSize="1xl" textAlign={"center"}>
            Already you have an account ? <Link to={"/login"}>login</Link>{" "}
          </Text>
        </Stack>
      </Form>
    </div>
  );
};

export default SignUp;
