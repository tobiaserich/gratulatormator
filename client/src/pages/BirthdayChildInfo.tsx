import React from "react";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import BirthdayChildImage from "../components/BirthdayChildImage";
import birthdayChildPlaceholder from "../assets/birthdayChildPlaceholder.svg";
import BirthdayChildInformation from "../components/BirthdayChildInformation";
import BirthdayChildSettings from "../components/BirthdayChildSettings";
import BigButton from "../components/BigButton";
import GenerateGratulation from "../components/GenerateGratulation";
import DeleteModal from "../components/DeleteModal";
import { useParams } from "react-router-dom";
import { getBirthday } from "../api/birthdays";

const BirthdayChildInfo = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  const [activeMenu, setActiveMenu] = React.useState<string>(
    "generateGratulation"
  );
  const [deleteBirthdayChild, setDeleteBirthdayChild] = React.useState<boolean>(
    false
  );
  const [birthdayChildData, setBirthdayChildData] = React.useState<any>([]);

  let transitionTimer: NodeJS.Timeout;
  const { id } = useParams();

  // fetch data function
  const getBirthdayChild = async (): Promise<any> => {
    const response = await getBirthday(id);
    setBirthdayChildData(response);
    return response;
  };

  // call fetch function
  React.useEffect(() => {
    getBirthdayChild();
  }, []);

  //transition function for changing the menu item
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

  const activeSubMenu = (birthday: string) => {
    switch (activeMenu) {
      case "BirthdayChildInfo":
        return (
          <BirthdayChildInformation
            handleClick={transition}
            birthdayDate={birthday}
          />
        );
      case "options":
        return (
          <BirthdayChildSettings
            handleClick={transition}
            handleDeleteBirthdayChild={setDeleteBirthdayChild}
            remindStatus={birthdayChildData!["remindMe"]}
            daysToRemind={birthdayChildData!["remindMeDays"]}
          />
        );
      case "generateGratulation":
        return (
          <GenerateGratulation
            handleClick={transition}
            firstName={birthdayChildData!.firstName}
          />
        );
    }
  };

  return (
    <>
      <MainContainer font="Arima Madurai" animation={animationName}>
        <Info topSpacing={20}>
          {birthdayChildData!["firstName"]} {birthdayChildData!["lastName"]}
        </Info>
        <BirthdayChildImage
          src={birthdayChildPlaceholder}
          imageWidth={150}
          spacingTop={10}
        />
        {birthdayChildData!["birthday"]
          ? activeSubMenu(birthdayChildData!["birthday"])
          : ""}
        <BigButton
          fontFamily="montserrat"
          fontSize={23}
          spacingTop={18}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setForwarding(event, "slideOut", "../main")
          }
          onTouchStart={() => ""}
        >
          back
        </BigButton>
      </MainContainer>
      {deleteBirthdayChild ? (
        <DeleteModal
          handleVisibility={setDeleteBirthdayChild}
          birthdayChildName={`${birthdayChildData!["firstName"]} ${
            birthdayChildData!["lastName"]
          }`}
          id={id}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default BirthdayChildInfo;
