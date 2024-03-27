import React ,{useState}from "react";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSigning } from "../utils/validation";
import { BiSolidHide,BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Stack,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaSigning) })

  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={"20px"}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
              />
              <InputRightElement
                width="4rem"
                style={{ cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                {show ? <BiSolidHide /> : <BiSolidShow />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" size="sm" type="submit">
            Continue
          </Button>
          <Text fontSize='1xl' textAlign={'center'}>Don't have an account ? <Link to={'/signup'}>Sign up</Link> </Text>
        </Stack>
      </Form> 
    </div>
  );
};

export default LoginForm;
