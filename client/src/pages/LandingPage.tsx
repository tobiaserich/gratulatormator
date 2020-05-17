import React from "react";
import styled from "@emotion/styled";
import Logo from "../components/Logo";
import Login from "../components/Login";

const Container = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled("h1")`
  margin: auto;
  margin-top: 30px;
  font-family: "Luckiest guy", "sans-serif";
  font-weight: 200;
  background: -webkit-linear-gradient(-90deg, #bb0000 0%, transparent 90%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px transparent;
`;

const LandingPage = () => {
  return (
    <Container>
      <Heading>Gratulatormator</Heading>
      <Logo />
      <Login />
    </Container>
  );
};

export default LandingPage;
