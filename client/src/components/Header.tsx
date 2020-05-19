import React from "react";
import styled from "@emotion/styled";
import { Heading } from "./Heading";

const Container = styled("header")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeparationLine = styled("div")`
  height: 1px;
  width: 280px;
  background-color: ${({ theme }: any) => theme.secondary300};
  margin-top: -18px;
  border-radius: 25px;
`;
const Header = () => {
  return (
    <Container>
      <Heading strokeColor="white" topSpacing={0}>
        Gratulatormator
      </Heading>
      <SeparationLine />
    </Container>
  );
};

export default Header;
