import React from "react";
import styled from "@emotion/styled";
import { Heading } from "../components/Heading";
import { Formular, Label, Input } from "../components/Formular";
import MainContainer from "../components/MainContainer";
import Button from "../components/Button";
import Link from "../components/Link";

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
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {};
  return (
    <MainContainer font="Arima Madurai" animation="zoomIn">
      <Title>Registration</Title>

      <Formular>
        <Label labelWidth="90%">
          Username
          <Input
            type="Text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></Input>
        </Label>
        <Label labelWidth="90%">
          Email
          <Input
            type="Text"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></Input>
        </Label>
        <Label labelWidth="90%">
          Password
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></Input>
        </Label>
        <ButtonContainer>
          <Button fontSize={20} type="button" onTouchStart={() => ""}>
            <Link href="/">cancel</Link>
          </Button>
          <Button
            fontSize={20}
            type="submit"
            onTouchStart={() => ""}
            onClick={() => {
              handleSubmit();
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
