import React from "react";
import styled from "@emotion/styled";
import { SubHeading } from "../components/Heading";
import user from "../assets/user.svg";
import { SeparationLine } from "./SeparationLine";

const Container = styled("section")`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled("img")`
  width: 70px;
`;

const UserContainer = styled("div")`
  margin-top: -5px;
  margin-bottom: 5px;
  display: flex;
`;

const UserDetails = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;
  line-height: 1.2;
  font-size: 14px;
  font-weight: 700;
`;

const UserDetail = styled("p")`
  margin: 0;
`;

const NextBirthday = () => {
  return (
    <Container>
      <SubHeading>Next Birthday</SubHeading>
      <UserContainer>
        <Image src={user} />
        <UserDetails>
          <UserDetail>Fridolin Müller</UserDetail>
          <UserDetail>21.03.1989</UserDetail>
          <UserDetail>31 Years old</UserDetail>
        </UserDetails>
      </UserContainer>
      <SeparationLine distanceBottom={10} />
    </Container>
  );
};

export default NextBirthday;
