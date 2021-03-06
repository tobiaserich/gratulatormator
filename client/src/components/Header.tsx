import React from "react";
import styled from "@emotion/styled";
import { Heading } from "./Heading";
import { SeparationLine } from "./SeparationLine";
import { RouterlessLink } from "../components/Link";
import { verifyUser } from "../api/user";

const Container = styled("header")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const [userVerification, setUserVerification] = React.useState<
    boolean | null
  >(null);

  // verificate if user is logged in and cookie is valid
  React.useEffect((): void => {
    const verificateUser = async (): Promise<void> => {
      const verification = await verifyUser();
      setUserVerification(verification);
    };
    verificateUser();
  }, []);

  //Forwarding of the user depending on the login verification
  const redirection = (): void => {
    if (
      window.location.pathname === "/registration" &&
      userVerification === true
    ) {
      window.location.replace("/main");
    }
    if (
      userVerification === false &&
      window.location.pathname !== "/registration"
    ) {
      window.location.replace("/");
    }
  };

  redirection();
  return (
    <RouterlessLink href="./main">
      <Container>
        <Heading strokeColor="white" topSpacing={10} fontSize={1.9}>
          Gratulatormator
        </Heading>
        <SeparationLine distanceTop={-18} />
      </Container>
    </RouterlessLink>
  );
};

export default Header;
