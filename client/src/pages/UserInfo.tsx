import React from "react";
import styled from "@emotion/styled";

import MainContainer from "../components/MainContainer";
import userImg from "../assets/user.svg";
import Button from "../components/Button";
import BigButton from "../components/BigButton";
import Link from "../components/Link";

type infoprops = {
  topSpacing?: number;
  fontSize?: number;
};

const Info = styled("div")<infoprops>`
  font-size: ${({ fontSize = 1.6 }) => fontSize}em;
  font-weight: 600;
  ${({ topSpacing }) => (topSpacing ? `margin-top:${topSpacing}px` : "")}
`;

const UserImg = styled("img")`
  height: 150px;
  margin-top: 10px;
  border-radius: 50%;
`;

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
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    birthdayArr[0] =
      birthdayMonth >= currentMonth
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
      <UserImg src={userImg} />
      <Info fontSize={1.3} topSpacing={20}>
        {birthday}
      </Info>
      <Info fontSize={1.3}>30 years old</Info>
      <Info fontSize={1.3}>{daysToBirthday} days until Birthday</Info>
      <Button fontSize={14} spacingTop={30}>
        options
      </Button>
      <Link href="./main">
        <BigButton fontFamily="montserrat" fontSize={23} spacingTop={15}>
          back
        </BigButton>
      </Link>
    </MainContainer>
  );
};

export default UserInfo;
