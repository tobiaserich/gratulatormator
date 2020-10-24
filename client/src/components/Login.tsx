import React from "react";
import { loginUser } from "../api/user";
import styled from "@emotion/styled";
import Button from "./Button";
import Link from "./Link";

type ThemeProps = {
  theme: any;
};

const Container = styled("section")`
  width: 300px;
  height: 230px;
  position: relative;
  bottom: 0;
  background-color: #fbf3cb;
  box-shadow: inset 5px 5px 10px rgba(255, 255, 255, 1),
    inset -5px 0px 10px rgba(255, 255, 255, 1);
  font-family: "Luckiest guy", "sans-serif";
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Label = styled("label")`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
`;

const Input = styled("input")`
  height: 25px;
  border-radius: 5px;
  margin-top: 3px;
`;

const SmallPrint = styled("a")<ThemeProps>`
  margin: 0;
  margin-top: 20px;
  font-size: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.font};
`;
const Login = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const login = await loginUser(username, password);
    if (login === "success") {
      window.location.replace("/main");
    }
  };

  return (
    <Container>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>): Promise<void> =>
          handleSubmit(event)
        }
      >
        <Label>
          Username
          <Input
            name="Username"
            type="text"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setUsername(event.target.value)
            }
          />
        </Label>
        <Label>
          Password
          <Input
            name="Password"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setPassword(event.target.value)
            }
          />
        </Label>
        <FlexContainer>
          <Button type="submit" onTouchStart={() => ""}>
            Login
          </Button>
          <Button type="button" onTouchStart={() => ""}>
            <Link href="./registration"> Register</Link>
          </Button>
        </FlexContainer>
        <FlexContainer>
          <SmallPrint href="./main">continue without login</SmallPrint>
        </FlexContainer>
      </form>
    </Container>
  );
};

export default Login;
