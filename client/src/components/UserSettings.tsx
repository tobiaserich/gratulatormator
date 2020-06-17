import React from "react";
import Info from "./Info";
import DropdownMenu from "./DropdownMenu";
import Button from "./Button";
import DeleteModal from "./DeleteModal";

type UserSettingsProps = {
  handleClick: any;
};

const UserSettings: React.FC<UserSettingsProps> = ({ handleClick }) => {
  const [deleteUser, setDeleteUser] = React.useState(false);
  const generateDaysDropdownItems = () => {
    let items: string[] = new Array(30).fill("");
    items.forEach((item, index) => {
      const newValue =
        index + 1 < 10 ? "0" + (index + 1) : (index + 1).toString();
      items[index] = newValue;
    });
    return items;
  };

  return (
    <>
      <Info fontSize={1.4} topSpacing={4}>
        Remind me <DropdownMenu items={generateDaysDropdownItems()} />
        days before
      </Info>
      <Button
        fontSize={18}
        weight="bold"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClick(event, "generateGratulation");
        }}
      >
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
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClick(event, "userInfo");
        }}
      >
        back to details
      </Button>

      {deleteUser ? <DeleteModal handleVisibility={setDeleteUser} /> : ""}
    </>
  );
};

export default UserSettings;