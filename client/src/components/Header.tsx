import React from "react";
import styled from "@emotion/styled";
import { Heading } from "./Heading";
import { SeparationLine } from "./SeparationLine";
import Link from "../components/Link";
import { verifyUser } from "../api/user";

const Container = styled("header")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const [userVerification, setUserVerification] = React.useState(null);
  React.useEffect(() => {
    const verificateUser = async () => {
      const verification = await verifyUser();
      setUserVerification(verification);
    };
    verificateUser();
  }, []);
  const redirection = () => {
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
    <Link href="./main">
      <Container>
        <Heading strokeColor="white" topSpacing={0} fontSize={1.9}>
          Gratulatormator
        </Heading>
        <SeparationLine distanceTop={-18} />
      </Container>
    </Link>
  );
};

export default Header;
