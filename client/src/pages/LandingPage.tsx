import React from "react";
import styled from "@emotion/styled";
import { Heading } from "../components/Heading";
import Logo from "../components/Logo";
import Login from "../components/Login";

const Container = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <Container>
      <Heading strokeColor="default" topSpacing={30}>
        Gratulatormator
      </Heading>
      <Logo />
      <Login />
    </Container>
  );
};

export default LandingPage;
