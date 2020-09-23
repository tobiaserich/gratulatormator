import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { SeparationLine, ShortSeparationLine } from "./SeparationLine";

type MonthProps = {
  month: string;
  birthdayChildren?: any;
};

type summaryProps = {
  rendered: boolean;
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
    border-left: 10px solid black;
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
  const [notInitialRendering, setNotInitialRendering] = React.useState(false);
  const [animation, setAnimation] = React.useState("");
  const handleAnimation = () => {
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

  const checkAge = (birthday: any) => {
    let alreadyBirthday = false;
    const birthdayArr = birthday.split(".");
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    const birthdayMonth = birthdayArr[1];
    const birthdayDay = birthdayArr[0];
    const birthdayYear = birthdayArr[2];

    if (currentMonth > birthdayMonth) {
      alreadyBirthday = true;
    } else if (
      currentMonth === parseInt(birthdayMonth) &&
      birthdayDay < currentDay
    ) {
      alreadyBirthday = true;
    }

    const calculateBirthday = currentYear - birthdayYear;
    return alreadyBirthday ? calculateBirthday : calculateBirthday - 1;
  };
  return (
    <Container
      onClick={() => {
        setNotInitialRendering(true);
        handleAnimation();
      }}
    >
      <Month rendered={notInitialRendering}>
        {month}
        <ShortSeparationLine />
      </Month>
      <Table animation={animation}>
        <tbody>
          {birthdayChildren.map((birthdayChild: any) => {
            return (
              <>
                <Person key={birthdayChild["_id"]}>
                  <Name>
                    {birthdayChild["firstName"]} {birthdayChild["lastName"]}
                  </Name>
                  <Birthdate>{birthdayChild["birthday"]}</Birthdate>
                  <Age>{checkAge(birthdayChild["birthday"])}</Age>
                  <SeeMore>
                    <Button onTouchStart={() => ""}>more</Button>
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
