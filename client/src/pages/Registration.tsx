import React from "react";
import { useHistory } from "react-router-dom";
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
  const [password, setPassword] = React.useState("");
  const [registrationData, setRegistrationData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = React.useState({
    username: false,
    email: false,
    password: false,
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const inputValidationPopUp = (
    <InputValidation>This field is required</InputValidation>
  );

  const validateInput = () => {
    const newValidation = { ...validation };
    newValidation.username = registrationData.username !== "" ? true : false;
    newValidation.email = registrationData.email !== "" ? true : false;
    newValidation.password = registrationData.password !== "" ? true : false;
    setValidation(newValidation);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (validation.username && validation.email && validation.password) {
      registerUser(registrationData);
      setTimeout(() => {
        window.location.replace("/");
      }, 20);
    }
  };

  const handleChange = (pos: any, event: any) => {
    const newValue: registrationDataType = { ...registrationData };
    newValue[pos] = event.target.value;
    setRegistrationData(newValue);
  };

  return (
    <MainContainer font="Arima Madurai" animation="zoomIn">
      <Title>Registration</Title>

      <Formular onSubmit={(event) => handleSubmit(event)}>
        <Label labelWidth="90%">
          Username
          <Input
            type="Text"
            placeholder="Username"
            value={registrationData.username}
            onChange={(event) => {
              handleChange("username", event);
            }}
          ></Input>
        </Label>
        {!validation["username"]
          ? isSubmitted
            ? inputValidationPopUp
            : ""
          : ""}
        <Label labelWidth="90%">
          Email
          <Input
            type="Text"
            placeholder="Email"
            value={registrationData.email}
            onChange={(event) => {
              handleChange("email", event);
            }}
          ></Input>
        </Label>
        {!validation["email"] ? (isSubmitted ? inputValidationPopUp : "") : ""}
        <Label labelWidth="90%">
          Password
          <Input
            type="password"
            placeholder="Password"
            value={registrationData.password}
            onChange={(event) => {
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
            onClick={(event) => {
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
