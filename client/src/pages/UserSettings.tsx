import React from "react";
import MainContainer from "../components/MainContainer";
import Info from "../components/Info";
import UserImage from "../components/UserImage";
import userImg from "../assets/user.svg";
import DaysDropdown from "../components/DaysDropdown";
import Button from "../components/Button";
import Link from "../components/Link";
import BigButton from "../components/BigButton";
import DeleteModal from "../components/DeleteModal";

const UserSettings = () => {
  const [deleteUser, setDeleteUser] = React.useState(true);

  return (
    <MainContainer font="Arima Madurai">
      <Info topSpacing={20}>Max Mustermann</Info>
      <UserImage src={userImg} imageWidth={150} spacingTop={10} />
      <Info fontSize={1.4}>
        Remind me <DaysDropdown days={30} />
        days before
      </Info>
      <Button fontSize={18} weight="bold">
        Generate gratulation
      </Button>

      <Button
        borderColor="red"
        spacingTop={50}
        buttonWidth={110}
        onClick={() => {
          setDeleteUser(true);
        }}
      >
        delete Person
      </Button>
      <Link href="./userInfo">
        <Button spacingTop={5} buttonWidth={110}>
          back to details
        </Button>
      </Link>
      <Link href="./main">
        {" "}
        <BigButton fontFamily="montserrat" fontSize={23} spacingTop={15}>
          back
        </BigButton>
      </Link>

      {deleteUser ? <DeleteModal handleVisibility={setDeleteUser} /> : ""}
    </MainContainer>
  );
};

export default UserSettings;
