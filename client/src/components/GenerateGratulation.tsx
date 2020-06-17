import React from "react";
import styled from "@emotion/styled";
import DropdownMenu from "./DropdownMenu";
import { SubHeading } from "./Heading";
import Button from "./Button";
import BigButton from "./BigButton";
import Link from "./Link";
import Info from "./Info";
import randomizeButton from "../assets/randomizeButton.svg";
import copyButton from "../assets/copyButton.svg";

type generateGratulationProps = {
  handleMenu: React.Dispatch<React.SetStateAction<string>>;
};

type themeProps = {
  theme: any;
};

type exampleProps = {
  friend: string;
  boss: string;
  partner: string;
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
  handleMenu,
}) => {
  const [textBoxText, setTextBoxText] = React.useState("");
  const [dropdownValue, setDropdownValue] = React.useState("friend");
  const items = ["Friend", "Boss", "Partner"];
  const exampleText: exampleProps = {
    friend: `Ich
bin
ein
Freund`,
    boss: `Ich
bin
ein
Boss`,
    partner: `Ich
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
      <Button spacingTop={5} onClick={() => handleMenu("options")}>
        back to options
      </Button>
      <Link href="./main">
        {" "}
        <BigButton fontFamily="montserrat" fontSize={23} spacingTop={15}>
          back
        </BigButton>
      </Link>
    </>
  );
};

export default GenerateGratulation;
