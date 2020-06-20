import React from "react";
import styled from "@emotion/styled";
import DropdownMenu from "./DropdownMenu";
import { SubHeading } from "./Heading";
import Button from "./Button";
import Info from "./Info";
import randomizeButton from "../assets/randomizeButton.svg";
import copyButton from "../assets/copyButton.svg";

type generateGratulationProps = {
  handleClick: any;
};

type themeProps = {
  theme: any;
};

type exampleProps = {
  Friend: string;
  Boss: string;
  Partner: string;
  [index: string]: string;
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
}) => {
  const [textBoxText, setTextBoxText] = React.useState("");
  const [dropdownValue, setDropdownValue] = React.useState("Friend");
  const items = ["Friend", "Boss", "Partner"];
  const exampleText: exampleProps = {
    Friend: `Ich
bin
ein
Freund`,
    Boss: `Ich
bin
ein
Boss`,
    Partner: `Ich
bin
ein
Partner`,
  };
  React.useEffect(() => {
    setTextBoxText(exampleText[dropdownValue]);
  }, [dropdownValue]);

  const handleChange = (event: any) => {
    setTextBoxText(event.target.value);
  };

  return (
    <>
      <CategoryContainer>
        <SubHeading>Category</SubHeading>
        <Info fontSize={1.2}>
          <DropdownMenu items={items} dropdownValue={setDropdownValue} />
        </Info>
        <RandomizButton>
          <img src={randomizeButton} />
        </RandomizButton>
      </CategoryContainer>
      <TextContainer>
        <TextBox
          onChange={(event: any) => handleChange(event)}
          value={textBoxText}
        ></TextBox>
        <CopyButton
          onClick={() => navigator.clipboard.writeText(textBoxText)}
          onTouchStart={() => {
            "";
          }}
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
