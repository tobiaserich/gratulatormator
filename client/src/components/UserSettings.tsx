import React from "react";
import Info from "./Info";
import DaysDropdown from "./DaysDropdown";
import Button from "./Button";
import Link from "./Link";
import BigButton from "./BigButton";
import DeleteModal from "./DeleteModal";

type UserSettingsProps = {
  handleMenu: React.Dispatch<React.SetStateAction<string>>;
};

const UserSettings: React.FC<UserSettingsProps> = ({ handleMenu }) => {
  const [deleteUser, setDeleteUser] = React.useState(false);
  return (
    <>
      <Info fontSize={1.4} topSpacing={4}>
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

      <Button
        spacingTop={5}
        buttonWidth={110}
        onClick={() => handleMenu("userInfo")}
      >
        back to details
      </Button>

      <Link href="./main">
        {" "}
        <BigButton fontFamily="montserrat" fontSize={23} spacingTop={15}>
          back
        </BigButton>
      </Link>

      {deleteUser ? <DeleteModal handleVisibility={setDeleteUser} /> : ""}
    </>
  );
};

export default UserSettings;
