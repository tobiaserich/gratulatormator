import React from "react";
import styled from "@emotion/styled";
import NextBirthday from "../components/NextBirthday";
import Button from "../components/Button";
import Link from "../components/Link";
import BirthdayCalendar from "../components/BirthdayCalendar";

const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arima Madurai";
`;

const Main = () => {
  return (
    <MainContainer>
      <NextBirthday />
      <Button fontSize={20}>
        <Link href="./AddPerson">Add new person</Link>
      </Button>
      <BirthdayCalendar />
    </MainContainer>
  );
};

export default Main;
