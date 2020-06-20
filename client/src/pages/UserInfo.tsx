import React from "react";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import UserImage from "../components/UserImage";
import userImg from "../assets/user.svg";
import UserInformation from "../components/UserInformation";
import UserSettings from "../components/UserSettings";
import BigButton from "../components/BigButton";
import GenerateGratulation from "../components/GenerateGratulation";
import DeleteModal from "../components/DeleteModal";

const UserInfo = () => {
  const [activeMenu, setActiveMenu] = React.useState("userInfo");
  const [animationName, setForwarding] = useTransition("slideIn");
  const [deleteUser, setDeleteUser] = React.useState(false);

  let transitionTimer: NodeJS.Timeout;

  const transition = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    target: string
  ) => {
    clearTimeout(transitionTimer);
    setForwarding(event, "slideOut", "none");
    transitionTimer = setTimeout(() => {
      setActiveMenu(target);
      setForwarding(event, "slideIn", "none");
    }, 250);
  };

  const component = () => {
    switch (activeMenu) {
      case "userInfo":
        return <UserInformation handleClick={transition} />;
      case "options":
        return (
          <UserSettings
            handleClick={transition}
            handleDeleteUser={setDeleteUser}
          />
        );
     case "generateGratulation":
        return <GenerateGratulation handleClick={transition} />;
    }
  };

  return (
    <>
      <MainContainer font="Arima Madurai" animation={animationName}>
        <Info topSpacing={20}>Max Mustermann</Info>
        <UserImage src={userImg} imageWidth={150} spacingTop={10} />
        {component()}
        <BigButton
          fontFamily="montserrat"
          fontSize={23}
          spacingTop={18}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setForwarding(event, "slideOut", "./main")
          }
          onTouchStart={() => ""}
        >
          back
        </BigButton>
      </MainContainer>
      {deleteUser ? <DeleteModal handleVisibility={setDeleteUser} /> : ""}
    </>
  );
};

export default UserInfo;
