import React from "react";
import styled from "@emotion/styled";
import MainContainer from "../components/MainContainer";
import { SubHeading } from "../components/Heading";
import user from "../assets/user.svg";
import unchecked from "../assets/checkboxUnchecked.svg";
import checked from "../assets/checkboxChecked.svg";
import Button from "../components/Button";
import Link from "../components/Link";

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

const Formular = styled("form")`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled("label")`
  width: 55%;
  display: flex;
  flex-direction: column;
`;

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

const AddImage = styled("img")`
  width: 120px;
  border-radius: 50%;
`;

const HiddenFileUpload = styled("input")`
  display: none;
`;

const InputCheckbox = styled("input")`
  opacity: 0;
`;

const Input = styled("input")`
  font-size: 24px;
  background-color: transparent;
  color: ${({ theme }: any) => theme.neutral500};
  border: none;
  margin-top: -5px;
  margin-bottom: 10px;
  padding-left: 4px;
  border-radius: 5px;
  box-shadow: inset 3px 3px 7px -6px ${({ theme }: any) => theme.neutral500};
`;

const InputValidation = styled("div")<themeProps>`
  margin-top: -10px;
  font-size: 12px;
  color: ${({ theme }) => theme.error200};
`;

const AddNewPerson = () => {
  const [userData, setUserData] = React.useState<userDataProps>({
    firstName: "",
    lastName: "",
    birthday: "",
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
  };

  return (
    <MainContainer font="Arima Madurai">
      <SubHeading>Add New Person</SubHeading>
      <Formular onSubmit={(event) => handleSubmit(event)}>
        <ImageLabel>
          <AddImage src={user} />
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
          <Link href="./main">
            <Button fontSize={20} spacingRight={15} type="button">
              cancel
            </Button>
          </Link>
          <Button fontSize={20} type="submit" onClick={() => inputValidation()}>
            submit
          </Button>
        </div>
      </Formular>
    </MainContainer>
  );
};

export default AddNewPerson;
