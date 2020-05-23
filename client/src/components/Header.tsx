import React from "react";
import styled from "@emotion/styled";
import { Heading } from "./Heading";
import { SeparationLine } from "./SeparationLine";

const Container = styled("header")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Heading strokeColor="white" topSpacing={0} fontSize={1.9}>
        Gratulatormator
      </Heading>
      <SeparationLine distanceTop={-18} />
    </Container>
  );
};

export default Header;
