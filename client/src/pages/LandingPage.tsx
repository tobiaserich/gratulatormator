import React from "react";
import MainContainer from "../components/MainContainer";
import { Heading } from "../components/Heading";
import Logo from "../components/Logo";
import Login from "../components/Login";

const LandingPage = () => {
  return (
    <MainContainer>
      <Heading strokeColor="default" topSpacing={30}>
        Gratulatormator
      </Heading>
      <Logo />
      <Login />
    </MainContainer>
  );
};

export default LandingPage;
