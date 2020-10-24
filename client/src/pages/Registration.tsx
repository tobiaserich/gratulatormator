import React from "react";
import styled from "@emotion/styled";
import { Heading } from "../components/Heading";
import {
  Formular,
  Label,
  Input,
  InputValidation,
} from "../components/Formular";
import MainContainer from "../components/MainContainer";
import Button from "../components/Button";
import Link from "../components/Link";
import { registerUser } from "../api/user";

type registrationDataType = {
  [index: string]: string;
  username: string;
  password: string;
  email: string;
};

type validationProps = {
  [index: string]: boolean;
  username: boolean;
  email: boolean;
  password: boolean;
};

const Title = styled(Heading)`
  font-family: "Arima Madurai";
`;

const ButtonContainer = styled("div")`
  display: flex;
  width: 200px;
  margin-top: 20px;
  justify-content: space-around;
`;

const Registration = () => {
  const [registrationData, setRegistrationData] = React.useState<
    registrationDataType
  >({
    username: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = React.useState<validationProps>({
    username: false,
    email: false,
    password: false,
  });

  const [emailUsed, setEmailUsed] = React.useState<boolean>(false);
  const [usernameUsed, setUsernameUsed] = React.useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  const validateInput = (): void => {
    const newValidation = { ...validation };
    newValidation.username = registrationData.username !== "" ? true : false;
    newValidation.email = registrationData.email !== "" ? true : false;
    newValidation.password = registrationData.password !== "" ? true : false;
    setValidation(newValidation);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validation.username && validation.email && validation.password) {
      const response = await registerUser(registrationData);
      if (response[0] === "success") {
        setTimeout(() => {
          window.location.replace("/");
        }, 20);
      } else {
        setEmailUsed(false);
        setUsernameUsed(false);
        response.map((item: string): void => {
          if (item === "emailInUse") {
            setEmailUsed(true);
          } else if (item === "usernameInUse") {
            setUsernameUsed(true);
          }
        });
      }
    }
  };

  const handleChange = (
    pos: string,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue: registrationDataType = { ...registrationData };
    newValue[pos] = event.target.value;
    setRegistrationData(newValue);
  };

  const inputValidationPopUp = (
    <InputValidation>This field is required</InputValidation>
  );

  const emailInUsePopUp = (
    <InputValidation>This email is already in use</InputValidation>
  );
  const usernameInUsePopUp = (
    <InputValidation>This username is already in use</InputValidation>
  );

  return (
    <MainContainer font="Arima Madurai" animation="zoomIn">
      <Title>Registration</Title>

      <Formular
        onSubmit={(event: React.FormEvent<HTMLFormElement>): Promise<void> =>
          handleSubmit(event)
        }
      >
        <Label labelWidth="90%">
          Username
          <Input
            type="Text"
            placeholder="Username"
            value={registrationData.username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              handleChange("username", event);
            }}
          ></Input>
        </Label>
        {!validation["username"]
          ? isSubmitted
            ? inputValidationPopUp
            : ""
          : ""}
        {usernameUsed ? (isSubmitted ? usernameInUsePopUp : "") : ""}
        <Label labelWidth="90%">
          Email
          <Input
            type="Text"
            placeholder="Email"
            value={registrationData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              handleChange("email", event);
            }}
          ></Input>
        </Label>
        {!validation["email"] ? (isSubmitted ? inputValidationPopUp : "") : ""}
        {emailUsed ? (isSubmitted ? emailInUsePopUp : "") : ""}
        <Label labelWidth="90%">
          Password
          <Input
            type="password"
            placeholder="Password"
            value={registrationData.password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              handleChange("password", event);
            }}
          ></Input>
        </Label>
        {!validation["password"]
          ? isSubmitted
            ? inputValidationPopUp
            : ""
          : ""}
        <ButtonContainer>
          <Button fontSize={20} type="button" onTouchStart={() => ""}>
            <Link href="/">cancel</Link>
          </Button>
          <Button
            fontSize={20}
            type="submit"
            onTouchStart={() => ""}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              validateInput();
            }}
          >
            submit
          </Button>
        </ButtonContainer>
      </Formular>
    </MainContainer>
  );
};

export default Registration;
