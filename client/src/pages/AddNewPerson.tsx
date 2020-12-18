import React from "react";
import styled from "@emotion/styled";
import useTransition from "../hooks/useTransition";
import MainContainer from "../components/MainContainer";
import { SubHeading } from "../components/Heading";
import BirthdayChildImage from "../components/BirthdayChildImage";
import birthdayChildPlaceholder from "../assets/birthdayChildPlaceholder.svg";
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
  const [submitResponse, setSubmitResponse] = React.useState<null | string>(
    null
  );
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [birthday, setBirthday] = React.useState<string>("");
  const [remindMe, setRemindMe] = React.useState<boolean>(false);
  const [submit, setSubmit] = React.useState<boolean>(false);
  const [validationCheck, setValidationCheck] = React.useState<
    validationDataProps
  >({
    firstName: false,
    lastName: false,
    birthday: false,
  });

  const inputValidationPopUp = (
    <InputValidation>This field is required</InputValidation>
  );

  const refreshBirthdayChildData = (): void => {
    setFirstName("");
    setLastName("");
    setBirthday("");
    setRemindMe(false);
  };
  //validates the input data and the correct format of the birthday
  const inputValidation = (): void => {
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
  // checks if all data pass the validation and send it to the database
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setSubmit(true);
    if (
      validationCheck["firstName"] === true &&
      validationCheck["lastName"] === true &&
      validationCheck["birthday"] === true
    ) {
      const BirthdayChildData = {
        firstName,
        lastName,
        birthday,
        remindMe,
        remindMeDays: "01",
      };
      const response = await addBirthday(BirthdayChildData);
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
          refresh={refreshBirthdayChildData}
        />
      ) : (
        <></>
      )}
      <SubHeading>Add New Person</SubHeading>
      <Formular
        onSubmit={(event: React.FormEvent<HTMLFormElement>): Promise<void> =>
          handleSubmit(event)
        }
      >
        <ImageLabel>
          <BirthdayChildImage src={birthdayChildPlaceholder} imageWidth={120} />
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setFirstName(event.currentTarget.value)
            }
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setLastName(event.currentTarget.value)
            }
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setBirthday(event.currentTarget.value)
            }
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setRemindMe(event.currentTarget.checked)
              }
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
