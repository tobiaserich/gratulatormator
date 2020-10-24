import React from "react";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import NextBirthday from "../components/NextBirthday";
import Button from "../components/Button";
import BirthdayCalendar from "../components/BirthdayCalendar";
import { getAllBirthdays } from "../api/birthdays";

const Main = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  const [allBirthdays, setAllBirthdays] = React.useState<object>([]);

  React.useEffect((): void => {
    const getBirthdays = async () => {
      const birthdays = await getAllBirthdays();
      if (birthdays) {
        setAllBirthdays(birthdays);
      }
    };
    getBirthdays();
  }, []);

  return (
    <MainContainer font="Arima Madurai" animation={animationName}>
      <NextBirthday birthdays={allBirthdays} />
      <Button
        fontSize={20}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setForwarding(event, "slideOut", "./addNewPerson");
        }}
        onTouchStart={() => ""}
      >
        Add new person
      </Button>
      <BirthdayCalendar allBirthdays={allBirthdays} />
    </MainContainer>
  );
};

export default Main;
