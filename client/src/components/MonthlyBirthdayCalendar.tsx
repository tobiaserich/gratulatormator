import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { SeparationLine, ShortSeparationLine } from "./SeparationLine";
import { Link } from "react-router-dom";
import checkAge from "../assets/helper/checkAge";

type MonthProps = {
  month: string;
  birthdayChildren?: any;
};

type summaryProps = {
  rendered: boolean;
  theme: any;
};

type tableProps = {
  animation: string;
};
const Container = styled("details")`
  position: relative;
  width: 300px;
  padding: 0px 3px;
  margin-top: 10px;

  &[open] > summary::after {
    animation: rotation 0.2s both;

    @keyframes rotation {
      0% {
      }
      100% {
        transform: rotate(90deg);
      }
    }
  }
`;

const Month = styled("summary")<summaryProps>`
  position: relative;
  font-weight: 900;
  display: flex;
  justify-content: space-between;

  ::-webkit-details-marker {
    display: none;
  }

  ::after {
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.neutral500};
    content: "";
    animation: ${({ rendered }) => (rendered ? "rotations" : "")} 0.2s both;
    @keyframes rotations {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

const Person = styled("tr")`
  font-size: 14px;
`;

const Name = styled("td")`
  width: 110px;
  max-width: 110px;
  line-height: 1.1;
`;

const Birthdate = styled("td")`
  width: 100px;
  max-width: 100px;
  text-align: center;
`;

const Age = styled("td")`
  width: 100px;
  padding-left: 10px;
`;

const SeeMore = styled("td")``;

const Separation = styled("td")``;

const Table = styled("table")<tableProps>`
  display: block;
  overflow:hidden;
  animation: 0.5s ${({ animation }) => animation} both;
  @keyframes open {
    0% {
      max-height:30px;
    }
    100% {
      max-height:1000px;
    }
  }
}


  
`;
const MonthlyBirthdayCalendar = ({ month, birthdayChildren }: MonthProps) => {
  const [initialRendering, setInitialRendering] = React.useState<boolean>(
    false
  );
  const [animation, setAnimation] = React.useState<string>("");

  const handleAnimation = (): void => {
    switch (animation) {
      case "open":
        setAnimation("close");
        break;
      case "close":
        setAnimation("open");
        break;
      default:
        setAnimation("open");
        break;
    }
  };

  return (
    <Container
      onClick={(): void => {
        setInitialRendering(true);
        handleAnimation();
      }}
    >
      <Month rendered={initialRendering}>
        {month}
        <ShortSeparationLine />
      </Month>
      <Table animation={animation}>
        <tbody>
          {birthdayChildren!.map((birthdayChild: any) => {
            return (
              <>
                <Person key={birthdayChild["_id"]}>
                  <Name>
                    {birthdayChild["firstName"]} {birthdayChild["lastName"]}
                  </Name>
                  <Birthdate>{birthdayChild["birthday"]}</Birthdate>
                  <Age>{checkAge(birthdayChild["birthday"])}</Age>
                  <SeeMore>
                    <Link to={"./BirthdayChildInfo/" + birthdayChild["_id"]}>
                      <Button onTouchStart={() => ""}>more</Button>
                    </Link>
                  </SeeMore>
                </Person>
                <tr>
                  <Separation colSpan={4}>
                    <SeparationLine autoMargin={true} />
                  </Separation>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MonthlyBirthdayCalendar;
