import React from "react";
import styled from "@emotion/styled";
import DropdownMenu from "./DropdownMenu";
import { SubHeading } from "./Heading";
import Button from "./Button";
import Info from "./Info";
import randomizeButton from "../assets/randomizeButton.svg";
import copyButton from "../assets/copyButton.svg";
import { getAvailableMessages } from "../api/messages";

type generateGratulationProps = {
  handleClick: any;
  firstName: string;
};

type themeProps = {
  theme: any;
};

type copyButtonProps = {
  theme: any;
};
const CategoryContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomizButton = styled("div")<themeProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background-color: transparent;
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.action200};
  :active {
    background-color: ${({ theme }) => theme.primary300};
  }
`;

const TextContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextBox = styled("textarea")`
  height: 100px;
  width: 260px;
`;

const CopyButton = styled("div")<copyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 2px solid ${({ theme }) => theme.action200};
  border-radius: 5px;
  :active {
    background-color: ${({ theme }) => theme.primary300};
  }
`;

const GenerateGratulation: React.FC<generateGratulationProps> = ({
  handleClick,
  firstName,
}) => {
  const [availableMessages, setAvailableMessages]: any = React.useState(null);
  const [activeMessage, setActiveMessage] = React.useState("");
  const [dropdownValue, setDropdownValue] = React.useState("Friend");
  const items = ["Friend"];

  React.useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getAvailableMessages(dropdownValue);
      setAvailableMessages(messages);
      const randomNumber = Math.floor(Math.random() * messages.length);
      const messageWithName = individualizeMessage(
        messages[randomNumber].message
      );
      setActiveMessage(messageWithName);
    };
    fetchMessages();
  }, []);

  const individualizeMessage = (message: string) => {
    const indidualizedMessage = message.replace(/(\[firstName\])/, firstName);
    return indidualizedMessage;
  };
  const generateMessage = () => {
    const randomMessage = Math.floor(Math.random() * availableMessages.length);
    const messageWithName = individualizeMessage(
      availableMessages[randomMessage].message
    );
    setActiveMessage(messageWithName);
  };

  const handleChange = (event: any) => {
    setActiveMessage(event.target.value);
  };

  return (
    <>
      <CategoryContainer>
        <SubHeading>Category</SubHeading>
        <Info fontSize={1.2}>
          <DropdownMenu items={items} dropdownValue={setDropdownValue} />
        </Info>
        <RandomizButton
          onTouchStart={() => ""}
          onClick={() => generateMessage()}
        >
          <img src={randomizeButton} />
        </RandomizButton>
      </CategoryContainer>
      <TextContainer>
        <TextBox
          onChange={(event: any) => handleChange(event)}
          value={activeMessage}
        ></TextBox>
        <CopyButton
          onClick={() => navigator.clipboard.writeText(activeMessage)}
          onTouchStart={() => ""}
        >
          <img src={copyButton} />
        </CopyButton>
      </TextContainer>
      <Button
        spacingTop={5}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleClick(event, "options")
        }
      >
        back to options
      </Button>
    </>
  );
};

export default GenerateGratulation;
