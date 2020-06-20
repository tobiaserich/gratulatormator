import React from "react";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import NextBirthday from "../components/NextBirthday";
import Button from "../components/Button";
import BirthdayCalendar from "../components/BirthdayCalendar";

const Main = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  React.useEffect(() => {}, [animationName]);
  return (
    <MainContainer font="Arima Madurai" animation={animationName}>
      <NextBirthday />
      <Button
        fontSize={20}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setForwarding(event, "slideOut", "./addNewPerson");
        }}
        onTouchStart={() => ""}
      >
        Add new person
      </Button>
      <BirthdayCalendar />
    </MainContainer>
  );
};

export default Main;
