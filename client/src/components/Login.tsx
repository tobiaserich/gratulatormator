import React from "react";
import styled from "@emotion/styled";

type ThemeProps = {
  theme: any;
};

const Container = styled("section")`
  width: 300px;
  height: 230px;
  position: absolute;
  bottom: 0;
  background-color: #fbf3cb;
  box-shadow: inset 5px 5px 10px rgba(255, 255, 255, 1),
    inset -5px 0px 10px rgba(255, 255, 255, 1);
  font-family: "Luckiest guy", "sans-serif";
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Label = styled("label")`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
`;

const Input = styled("input")`
  height: 25px;
  border-radius: 5px;
  margin-top: 3px;
`;

const Button = styled("button")<ThemeProps>`
  background-color: transparent;
  border: 2.3px solid ${({ theme }) => theme.action100};
  border-radius: 4px;
`;

const SmallPrint = styled("a")<ThemeProps>`
  margin: 0;
  margin-top: 20px;
  font-size: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.font};
`;
const Login = () => {
  return (
    <Container>
      <form>
        <Label>
          Username
          <Input name="Username" type="text" />
        </Label>
        <Label>
          Password
          <Input name="Password" type="password" />
        </Label>
        <FlexContainer>
          <Button type="submit">Login</Button>
          <Button type="button">Register</Button>
        </FlexContainer>
        <FlexContainer>
          <SmallPrint href="./main">continue without login</SmallPrint>
        </FlexContainer>
      </form>
    </Container>
  );
};

export default Login;
