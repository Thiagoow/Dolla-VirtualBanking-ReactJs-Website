import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  H1,
  Label,
  Input,
  Button,
  Text
} from "./logInStyles";

const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>

          <FormContent>
            <Form action="#">
              <H1>Log In to your account</H1>

              <Label htmlFor="for">E-mail</Label>
              <Input type="email" required />

              <Label htmlFor="for">Password</Label>
              <Input type="password" required />

              <Button type="submit">Log In</Button>
              <Text>Forgot my password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
