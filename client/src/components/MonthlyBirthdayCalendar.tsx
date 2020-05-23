import React from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { SeparationLine, ShortSeparationLine } from "./SeparationLine";

type MonthProps = {
  month: string;
};

type summaryProps = {
  rendered: boolean;
};

const Container = styled("details")`
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

const MonthlyBirthdayCalendar = ({ month }: MonthProps) => {
  const [notInitialRendering, setNotInitialRendering] = React.useState(false);
  return (
    <Container onClick={() => setNotInitialRendering(true)}>
      <Month rendered={notInitialRendering}>
        {month}
        <ShortSeparationLine />
      </Month>
      <table>
        <Person>
          <Name>Johannes Mittermayer</Name>
          <Birthdate>22.11.1998</Birthdate>
          <Age>22 y </Age>
          <SeeMore>
            <Button>more</Button>
          </SeeMore>
        </Person>
        <tr>
          <Separation colSpan={4}>
            <SeparationLine autoMargin={true} />
          </Separation>
        </tr>

        <Person>
          <Name>Martin Müller</Name>
          <Birthdate>11.01.2020</Birthdate>
          <Age>9 y </Age>
          <SeeMore>
            <Button>more</Button>
          </SeeMore>
        </Person>
        <tr>
          <Separation colSpan={4}>
            <SeparationLine autoMargin={true} />
          </Separation>
        </tr>
        <Person>
          <Name>Johannes Mittermayer</Name>
          <Birthdate>22.11.1998</Birthdate>
          <Age>22 y </Age>
          <SeeMore>
            <Button>more</Button>
          </SeeMore>
        </Person>
      </table>
    </Container>
  );
};

export default MonthlyBirthdayCalendar;