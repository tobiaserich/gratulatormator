import React from "react";
import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import UserImage from "../components/UserImage";
import userImg from "../assets/user.svg";
import UserInformation from "../components/UserInformation";
import UserSettings from "../components/UserSettings";

const UserInfo = () => {
  const [activeMenu, setActiveMenu] = React.useState("userInfo");
  const component = () => {
    switch (activeMenu) {
      case "options":
        return <UserSettings handleMenu={setActiveMenu} />;

      case "userInfo":
        return <UserInformation handleMenu={setActiveMenu} />;
    }
  };

  return (
    <MainContainer font="Arima Madurai">
      <Info topSpacing={20}>Max Mustermann</Info>
      <UserImage src={userImg} imageWidth={150} spacingTop={10} />
      {component()}
    </MainContainer>
  );
};

export default UserInfo;
