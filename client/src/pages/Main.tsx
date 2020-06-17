import React from "react";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import NextBirthday from "../components/NextBirthday";
import Button from "../components/Button";
import Link from "../components/Link";
import BirthdayCalendar from "../components/BirthdayCalendar";

const Main = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  React.useEffect(() => {
    console.log(animationName);
  }, [animationName]);
  return (
    <MainContainer font="Arima Madurai" animation={animationName}>
      <NextBirthday />
      <Button
        fontSize={20}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setForwarding(event, "slideOut", "./addNewPerson");
        }}
      >
        Add new person
      </Button>
      <BirthdayCalendar />
    </MainContainer>
  );
};

export default Main;
