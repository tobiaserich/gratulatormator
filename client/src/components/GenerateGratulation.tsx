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

type ThemeProps = {
  [index: string]: string;
};

type ButtonProps = {
  theme: ThemeProps;
};

const CategoryContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomizeButton = styled("div")<ButtonProps>`
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

const TextBox = styled("div")`
  height: 100px;
  width: 260px;
  background-color: white;
  font-size: 0.7em;
`;

const CopyButton = styled("div")<ButtonProps>`
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
  const [availableMessages, setAvailableMessages]: any = React.useState([]);
  const [activeMessage, setActiveMessage] = React.useState<string>("");
  const [dropdownValue, setDropdownValue] = React.useState<string>("Friend");
  const items: string[] = ["Friend", "Friends"];

  //fetch all available messages from the database
  React.useEffect((): void => {
    const fetchMessages = async (): Promise<void> => {
      const messages = await getAvailableMessages(dropdownValue);
      setAvailableMessages(messages);
      //set a random message as initial message
      const randomNumber = Math.floor(Math.random() * messages.length);
      const messageWithName = individualizeMessage(
        messages[randomNumber].message
      );
      setActiveMessage(messageWithName);
    };
    fetchMessages();
  }, []);

  // replace [firstName] in message with the name of the birthday child
  const individualizeMessage = (message: string): string => {
    const indidualizedMessage = message.replace(/(\[firstName\])/, firstName);
    return indidualizedMessage;
  };

  //sets a new random message when the user clicks on the randomize button
  const generateMessage = (): void => {
    const randomMessage = Math.floor(Math.random() * availableMessages.length);
    const messageWithName = individualizeMessage(
      availableMessages[randomMessage].message
    );
    setActiveMessage(messageWithName);
  };

  const beautify = (message: string) => {
    const msgToArray = message.split("\n");
    console.log(msgToArray);
    return (
      <>
        {msgToArray.map((item) => {
          return (
            <>
              {item}
              <br />
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <CategoryContainer>
        <SubHeading>Category</SubHeading>
        <Info fontSize={1.2}>
          <DropdownMenu items={items} dropdownValue={setDropdownValue} />
        </Info>
        <RandomizeButton
          onTouchStart={() => ""}
          onClick={(): void => generateMessage()}
        >
          <img src={randomizeButton} alt="button to start randomizer" />
        </RandomizeButton>
      </CategoryContainer>
      <TextContainer>
        <TextBox>{beautify(activeMessage)}</TextBox>
        <CopyButton
          onClick={(): Promise<void> =>
            navigator.clipboard.writeText(activeMessage)
          }
          onTouchStart={() => ""}
        >
          <img src={copyButton} alt="close Button" />
        </CopyButton>
      </TextContainer>
      <Button
        spacingTop={5}
        onClick={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void => handleClick(event, "options")}
      >
        back to options
      </Button>
    </>
  );
};

export default GenerateGratulation;
