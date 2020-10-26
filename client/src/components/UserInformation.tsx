import React from "react";
import Info from "../components/Info";
import Button from "../components/Button";
import checkAge from "../assets/helper/checkAge";

type UserInformationProps = {
  handleClick: any;
  birthdayDate: string;
};

const UserInformation: React.FC<UserInformationProps> = ({
  handleClick,
  birthdayDate,
}) => {
  const [birthday, setBirthday] = React.useState<string>("");
  const [daysToBirthday, setDaysToBirthday] = React.useState<number>(0);
  //calculates the days until birthday an sets the state
  React.useEffect((): void => {
    setBirthday(birthdayDate);
    const sum = daysUntilBirthday(birthdayDate);
    setDaysToBirthday(sum);
  }, []);

  //converts the birthday in ms
  const birthdayToMs = (birthday: string): number => {
    const birthdayArr = birthday.split(".").reverse();
    const joinedBirthday = birthdayArr.join("-");
    const birthdayMonth = new Date(joinedBirthday).getMonth() + 1;
    const birthdayDay = new Date(joinedBirthday).getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    birthdayArr[0] =
      birthdayMonth > currentMonth ||
      (birthdayMonth === currentMonth && birthdayDay >= currentDay)
        ? currentYear.toString()
        : (currentYear + 1).toString();
    return Date.parse(birthdayArr.join("-"));
  };

  //calculate days until birthday
  const daysUntilBirthday = (birthday: string): number => {
    const birthdayConverted = birthdayToMs(birthday);
    const today = Date.now();
    const daysUntilBDay = Math.ceil((birthdayConverted - today) / 86400000);
    return daysUntilBDay;
  };

  return (
    <>
      <Info fontSize={1.3} topSpacing={20}>
        {birthday}
      </Info>
      <Info fontSize={1.3}>{checkAge(birthday)} years old</Info>
      <Info fontSize={1.3}>{daysToBirthday} days until Birthday</Info>

      <Button
        fontSize={14}
        spacingTop={30}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClick(event, "options");
        }}
        onTouchStart={() => ""}
      >
        options
      </Button>
    </>
  );
};

export default UserInformation;
