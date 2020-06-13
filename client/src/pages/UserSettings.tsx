import React from "react";

import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import UserImage from "../components/UserImage";
import userImg from "../assets/user.svg";
import DaysDropdown from "../components/DaysDropdown";
import { ArrowDown } from "../components/Arrows";

const UserSettings = () => {
  return (
    <MainContainer font="Arima Madurai">
      <Info topSpacing={20}>Max Mustermann</Info>
      <UserImage src={userImg} imageWidth={150} spacingTop={10} />
      <Info fontSize={1.4}>
        Remind me <DaysDropdown />
        days before
      </Info>
    </MainContainer>
  );
};

export default UserSettings;
