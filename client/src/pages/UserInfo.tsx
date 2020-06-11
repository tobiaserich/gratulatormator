import React from "react";

import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import UserImage from "../components/UserImage";
import userImg from "../assets/user.svg";
import Button from "../components/Button";
import BigButton from "../components/BigButton";
import Link from "../components/Link";

const UserInfo = () => {
  const [birthday, setBirthday] = React.useState("10.06.1989");
  const [daysToBirthday, setDaysToBirthday] = React.useState(0);

  React.useEffect(() => {
    const sum = daysUntilBirthday(birthday);
    setDaysToBirthday(sum);
  }, []);
  const birthdayRearrange = (birthday: string) => {
    const birthdayArr = birthday.split(".").reverse();
    const birthdayMonth = new Date(birthdayArr.join("-")).getMonth();
    const birthdayDay = new Date(birthdayArr.join("-")).getDate();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    birthdayArr[0] =
      birthdayMonth >= currentMonth && birthdayDay >= currentDay
        ? currentYear.toString()
        : (currentYear + 1).toString();
    return Date.parse(birthdayArr.join("-"));
  };

  const daysUntilBirthday = (birthday: string) => {
    const birthdayConverted = birthdayRearrange(birthday);
    const today = Date.now();
    const daysUntilBDay = Math.ceil((birthdayConverted - today) / 86400000);
    return daysUntilBDay;
  };

  return (
    <MainContainer font="Arima Madurai">
      <Info topSpacing={20}>Max Mustermann</Info>
      <UserImage src={userImg} imageWidth={150} spacingTop={10} />
      <Info fontSize={1.3} topSpacing={20}>
        {birthday}
      </Info>
      <Info fontSize={1.3}>30 years old</Info>
      <Info fontSize={1.3}>{daysToBirthday} days until Birthday</Info>
      <Link href="./userSettings">
        <Button fontSize={14} spacingTop={30}>
          options
        </Button>
      </Link>
      <Link href="./main">
        <BigButton fontFamily="montserrat" fontSize={23} spacingTop={15}>
          back
        </BigButton>
      </Link>
    </MainContainer>
  );
};

export default UserInfo;
