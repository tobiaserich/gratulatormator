import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Info from "./Info";
import DropdownMenu from "./DropdownMenu";
import Button from "./Button";
import RemindMeContainer from "./RemindMeContainer";
import { updateRemindMe, updateRemindMeDays } from "../api/birthdays";

type UserSettingsProps = {
  handleClick: any;
  handleDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  remindStatus: boolean;
  daysToRemind: string | undefined;
};

const InputCheckbox = styled("input")`
  opacity: 0;
`;

const UserSettings: React.FC<UserSettingsProps> = ({
  handleClick,
  handleDeleteUser,
  remindStatus,
  daysToRemind,
}) => {
  const [remindMeDays, setRemindMeDays] = React.useState<string>("xx");
  const [remindMe, setRemindMe] = React.useState<boolean>(false);
  const { id } = useParams();

  //set the states in the initial rendering phase
  React.useEffect((): void => {
    setRemindMeDays(daysToRemind!);
    setRemindMe(remindStatus);
  }, []);

  //update the remindDays value in the database every time the users change it
  React.useEffect((): void => {
    updateRemindMeDays(id, remindMeDays);
  }, [remindMeDays]);

  //generate an array with {days} positions to pass it to the dropdownmenu
  const generateDaysDropdownItems = (): string[] => {
    const days = 30;
    let items: string[] = new Array(days).fill("");
    items.forEach((item, index) => {
      const newValue =
        index + 1 < 10 ? "0" + (index + 1) : (index + 1).toString();
      items[index] = newValue;
    });
    return items;
  };

  const handleRemindChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemindMe(event.currentTarget.checked);
    updateRemindMe(id, event.currentTarget.checked);
  };

  const handleDaysToRemindChange = (days: string): void => {
    setRemindMeDays(days);
  };

  return (
    <>
      <Info fontSize={1.4} topSpacing={4} status={!remindMe ? "disable" : ""}>
        Remind me{" "}
        <DropdownMenu
          items={generateDaysDropdownItems()}
          status={remindMe}
          daysToRemind={daysToRemind}
          handleDaysToRemind={handleDaysToRemindChange}
        />
        days before
      </Info>
      <Info fontSize={1}>
        <RemindMeContainer checkBoxChecked={remindMe}>
          <InputCheckbox
            type="checkbox"
            checked={remindMe}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              handleRemindChange(event)
            }
          />
          remind me
        </RemindMeContainer>
      </Info>
      <Button
        fontSize={18}
        weight="bold"
        onClick={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void => {
          handleClick(event, "generateGratulation");
        }}
        onTouchStart={() => ""}
      >
        Generate gratulation
      </Button>

      <Button
        borderColor="red"
        spacingTop={50}
        buttonWidth={110}
        onClick={(): void => {
          handleDeleteUser(true);
        }}
        onTouchStart={() => ""}
      >
        delete Person
      </Button>

      <Button
        spacingTop={5}
        buttonWidth={110}
        onClick={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void => {
          handleClick(event, "userInfo");
        }}
        onTouchStart={() => ""}
      >
        back to details
      </Button>
    </>
  );
};

export default UserSettings;
