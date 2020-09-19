import React from "react";
import styled from "@emotion/styled";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import { SubHeading } from "../components/Heading";
import UserImage from "../components/UserImage";
import user from "../assets/user.svg";
import {
  Formular,
  Label,
  Input,
  InputValidation,
} from "../components/Formular";
import unchecked from "../assets/checkboxUnchecked.svg";
import checked from "../assets/checkboxChecked.svg";
import Button from "../components/Button";
import { addBirthday } from "../api/birthdays";

type userDataProps = {
  firstName: string;
  lastName: string;
  birthday: string;
  remindMe: boolean;
  [index: string]: string | boolean;
};

type validationDataProps = {
  firstName: boolean;
  lastName: boolean;
  birthday: boolean;
  [index: string]: boolean;
};
type checkBoxProps = {
  checkBoxChecked: boolean | undefined;
};

type themeProps = {
  theme: any;
};

const ImageLabel = styled("label")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RemindContainer = styled("label")<checkBoxProps>`
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;
  align-items: center;
  line-height: 1;
  &::after {
    margin-left: 10px;
    content: "";
    min-width: 24px;
    height: 21px;
    background-image: ${({ checkBoxChecked }) =>
      checkBoxChecked ? `url(${checked})` : `url(${unchecked})`};
  }
`;

const HiddenFileUpload = styled("input")`
  display: none;
`;

const InputCheckbox = styled("input")`
  opacity: 0;
`;

const AddNewPerson = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  const [userData, setUserData] = React.useState<userDataProps>({
    firstName: "bla",
    lastName: "bla",
    birthday: "11.11.1989",
    remindMe: false,
  });

  const [validationCheck, setValidationCheck] = React.useState<
    validationDataProps
  >({
    firstName: false,
    lastName: false,
    birthday: false,
  });

  const [submit, setSubmit] = React.useState(false);

  const inputValidationPopUp = (
    <InputValidation>This field is required</InputValidation>
  );

  const inputValidation = () => {
    const birthdayVerification = /^([1-9]{2}).([1-9]{2}).([1-9]{4})/;
    const validationData: validationDataProps = { ...validationCheck };

    Object.keys(userData).forEach((value) => {
      if (value === "birthday") {
        userData[value].match(birthdayVerification)
          ? (validationData[value] = true)
          : (validationData[value] = false);
      } else if (value !== "remindMe" && value !== "birthday") {
        userData[value] === ""
          ? (validationData[value] = false)
          : (validationData[value] = true);
      }
    });
    setValidationCheck(validationData);
  };

  const handleChange = (
    arrayPos: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLInputElement>
  ) => {
    let newUserData: userDataProps = { ...userData };
    const eventValue =
      arrayPos === "remindMe"
        ? event.currentTarget.checked
        : event.currentTarget.value;

    newUserData[arrayPos] = eventValue;
    setUserData(newUserData);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
    if (
      validationCheck["firstName"] === true &&
      validationCheck["lastName"] === true &&
      validationCheck["birthday"] === true
    ) {
      addBirthday(userData);
    }
  };

  return (
    <MainContainer font="Arima Madurai" animation={animationName}>
      <SubHeading>Add New Person</SubHeading>
      <Formular onSubmit={(event) => handleSubmit(event)}>
        <ImageLabel>
          <UserImage src={user} imageWidth={120} />
          Add image
          <HiddenFileUpload
            type="file"
            accept=".jpg, .jpeg, .png"
          ></HiddenFileUpload>
        </ImageLabel>

        <Label>
          First Name
          <Input
            type="text"
            value={userData["firstName"]}
            placeholder="first name"
            onChange={(event) => handleChange("firstName", event)}
          />
        </Label>

        {!validationCheck["firstName"]
          ? submit
            ? inputValidationPopUp
            : ""
          : ""}

        <Label>
          Last Name
          <Input
            type="text"
            value={userData["lastName"]}
            placeholder="last name"
            onChange={(event) => handleChange("lastName", event)}
          />
        </Label>
        {!validationCheck["lastName"]
          ? submit
            ? inputValidationPopUp
            : ""
          : ""}
        <Label>
          Birthday
          <Input
            type="text"
            maxLength={10}
            value={userData["birthday"]}
            placeholder="dd.mm.yyyy"
            onChange={(event) => handleChange("birthday", event)}
          />
        </Label>
        {!validationCheck["birthday"]
          ? submit
            ? inputValidationPopUp
            : ""
          : ""}
        <Label>
          <RemindContainer checkBoxChecked={userData["remindMe"]}>
            Remind me <br />
            on birthday
            <InputCheckbox
              type="checkbox"
              checked={userData["remindMe"]}
              onChange={(event) => handleChange("remindMe", event)}
            />
          </RemindContainer>
        </Label>
        <div>
          <Button
            fontSize={20}
            spacingRight={15}
            type="button"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              setForwarding(event, "slideOut", "./main")
            }
            onTouchStart={() => ""}
          >
            cancel
          </Button>

          <Button
            fontSize={20}
            type="submit"
            onClick={() => inputValidation()}
            onTouchStart={() => ""}
          >
            submit
          </Button>
        </div>
      </Formular>
    </MainContainer>
  );
};

export default AddNewPerson;
