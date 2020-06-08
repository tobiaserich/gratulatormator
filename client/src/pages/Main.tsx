import React from "react";
import styled from "@emotion/styled";
import MainContainer from "../components/MainContainer";
import NextBirthday from "../components/NextBirthday";
import Button from "../components/Button";
import Link from "../components/Link";
import BirthdayCalendar from "../components/BirthdayCalendar";

const Main = () => {
  return (
    <MainContainer font="Arima Madurai">
      <NextBirthday />
      <Button fontSize={20}>
        <Link href="./AddNewPerson">Add new person</Link>
      </Button>
      <BirthdayCalendar />
    </MainContainer>
  );
};

export default Main;
