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
import Button from "../components/Button";
import { addBirthday } from "../api/birthdays";
import Modal from "../components/Modal";
import RemindMeContainer from "../components/RemindMeContainer";

type validationDataProps = {
  firstName: boolean;
  lastName: boolean;
  birthday: boolean;
  [index: string]: boolean;
};

type themeProps = {
  theme: any;
};

const ImageLabel = styled("label")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HiddenFileUpload = styled("input")`
  display: none;
`;

const InputCheckbox = styled("input")`
  opacity: 0;
`;

const AddNewPerson = () => {
  const [animationName, setForwarding] = useTransition("slideIn");
  const [submitResponse, setSubmitResponse] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [remindMe, setRemindMe] = React.useState(false);

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

  const refreshUserData = () => {
    setFirstName("");
    setLastName("");
    setBirthday("");
    setRemindMe(false);
  };

  const inputValidation = () => {
    const birthdayVerification = /^([0-9]{2}).([0-9]{2}).([0-9]{4})/;
    const validationData: validationDataProps = { ...validationCheck };

    if (birthday.match(birthdayVerification)) {
      validationData["birthday"] = true;
    } else {
      validationData["birthday"] = false;
    }

    if (firstName) {
      validationData["firstName"] = true;
    } else {
      validationData["firstName"] = false;
    }

    if (lastName) {
      validationData["lastName"] = true;
    } else {
      validationData["lastName"] = false;
    }

    setValidationCheck(validationData);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmit(true);
    if (
      validationCheck["firstName"] === true &&
      validationCheck["lastName"] === true &&
      validationCheck["birthday"] === true
    ) {
      const userData = {
        firstName,
        lastName,
        birthday,
        remindMe,
        remindMeDays: "01",
      };
      const response = await addBirthday(userData);
      setSubmitResponse(response);
      setShowModal(true);
    }
  };

  return (
    <MainContainer font="Arima Madurai" animation={animationName}>
      {showModal ? (
        <Modal
          status={submitResponse}
          toggleModal={() => setShowModal(!showModal)}
          forwarding={setForwarding}
          refresh={refreshUserData}
        />
      ) : (
        <></>
      )}
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
            value={firstName}
            placeholder="first name"
            onChange={(event) => setFirstName(event.currentTarget.value)}
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
            value={lastName}
            placeholder="last name"
            onChange={(event) => setLastName(event.currentTarget.value)}
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
            value={birthday}
            placeholder="dd.mm.yyyy"
            onChange={(event) => setBirthday(event.currentTarget.value)}
          />
        </Label>
        {!validationCheck["birthday"]
          ? submit
            ? inputValidationPopUp
            : ""
          : ""}
        <Label>
          <RemindMeContainer checkBoxChecked={remindMe}>
            Remind me <br />
            on birthday
            <InputCheckbox
              type="checkbox"
              checked={remindMe}
              onChange={(event) => setRemindMe(event.currentTarget.checked)}
            />
          </RemindMeContainer>
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
