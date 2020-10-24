import React from "react";
import styled from "@emotion/styled";
import { SubHeading } from "../components/Heading";
import UserImage from "../components/UserImage";
import user from "../assets/user.svg";
import { SeparationLine } from "./SeparationLine";
import showBirthdayForMonth from "../assets/helper/showBirthdayForMonth";
import sortBirthday from "../assets/helper/sortBirthday";
import checkAge from "../assets/helper/checkAge";

type animationProps = {
  animation: string;
};
const Container = styled("section")<animationProps>`
  position: relative;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 0.5s ${({ animation }) => animation} both;
  @keyframes swipeRight {
    from {
      transform: translate(0%);
    }
    45% {
      transform: translate(100%);
    }
    50% {
      opacity: -1;
      transform: translate(-200%);
    }
    55% {
      opacity: 1;
    }
    to {
      transform: translate(0%);
    }
  }

  @keyframes swipeLeft {
    from {
      transform: translate(0%);
    }
    45% {
      transform: translate(-100%);
    }
    50% {
      opacity: -1;
      transform: translate(200%);
    }
    55% {
      opacity: 1;
    }
    to {
      transform: translate(0%);
    }
  }
`;

const UserContainer = styled("div")`
  margin-top: -5px;
  margin-bottom: 5px;
  display: flex;

  }
`;

const UserDetails = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;
  line-height: 1.2;
  font-size: 14px;
  font-weight: 700;
`;

const UserDetail = styled("p")`
  margin: 0;
`;

const NextBirthday = ({ birthdays }: any) => {
  const [currentBirthday, setCurrentBirthday] = React.useState(0);
  const [nextBirthdays, setNextBirthdays] = React.useState([
    { firstName: "Tobias", lastName: "Erich", birthday: "24.12.1989" },
  ]);
  const [animation, setAnimation] = React.useState("initial-state");
  let swipeStart: any;
  let swipeEnd: any;
  React.useEffect(() => {
    getNextBirthday();
  }, [birthdays]);

  const getNextBirthday = (additor: number = 1, initial = false) => {
    const currentMonth = new Date().getMonth() + 1;
    const comparingMonth = new Date().getMonth() + additor;
    const month =
      comparingMonth >= 10 ? `.${comparingMonth}` : `.0${comparingMonth}`;
    const nextBirthdays = showBirthdayForMonth(month, birthdays);

    if (birthdays[0] === undefined) {
      return;
    }
    if (nextBirthdays.length === 0) {
      comparingMonth >= 12
        ? getNextBirthday(additor - 11)
        : getNextBirthday(additor + 1);
    }
    if (nextBirthdays.length > 0) {
      if (comparingMonth > currentMonth || comparingMonth < currentMonth) {
        let birthdays: any = [];
        const sortedBirthdays = sortBirthday(nextBirthdays);
        sortedBirthdays.map((birthday: any, index: any) => {
          if (index === 0) {
            birthdays.push(birthday);
          } else {
            const initialBirthdayDay = parseInt(
              birthdays[0].birthday.split(".").splice(0, 1)
            );
            const comparingBirthdayDay = parseInt(
              birthday.birthday.split(".").splice(0, 1)
            );
            if (initialBirthdayDay === comparingBirthdayDay) {
              birthdays.push(birthday);
            } else if (initialBirthdayDay > comparingBirthdayDay) {
              birthdays = [birthday];
            }
          }
        });
        setNextBirthdays(birthdays);
      } else {
        let birthdays: any = [];
        const sortedBirthdays = sortBirthday(nextBirthdays);
        const currentDay = new Date().getDate();

        sortedBirthdays.map((birthday: any) => {
          const birthdayDay = parseInt(
            birthday.birthday.split(".").splice(0, 1)
          );
          if (!birthdays[0] && birthdayDay > currentDay) {
            birthdays.push(birthday);
          } else {
            if (birthdays[0]) {
              const comparingBirthdayDay = parseInt(
                birthdays[0].birthday.split(".").splice(0, 1)
              );

              if (birthdayDay === comparingBirthdayDay) {
                birthdays.push(birthday);
              }
              if (birthdayDay < comparingBirthdayDay) {
                birthdays = [birthday];
              }
            }
          }
        });
        if (birthdays.length === 0) {
          comparingMonth >= 12
            ? getNextBirthday(additor - 11)
            : getNextBirthday(additor + 1);
        } else {
          setNextBirthdays(birthdays);
        }
      }
    }
  };

  const handleTouch = (pos: any, event: any) => {
    if (pos === "start") {
      swipeStart = event.changedTouches[0].clientX;
    }
    if (pos === "end") {
      swipeEnd = event.changedTouches[0].clientX;
      calcSwipe();
    }
  };

  const calcSwipe = () => {
    const swipeLength = 25;
    if (swipeStart > swipeEnd + swipeLength) {
      setAnimation("swipeLeft");
      if (currentBirthday < nextBirthdays.length - 1) {
        setTimeout(() => setCurrentBirthday(currentBirthday + 1), 150);
      } else {
        setTimeout(() => setCurrentBirthday(0), 150);
      }
      setTimeout(() => {
        setAnimation("none");
      }, 500);
    } else if (swipeStart + swipeLength < swipeEnd) {
      setAnimation("swipeRight");
      setTimeout(() => {
        setAnimation("none");
      }, 500);
      if (currentBirthday > 0) {
        setTimeout(() => setCurrentBirthday(currentBirthday - 1), 150);
      } else {
        setTimeout(() => setCurrentBirthday(nextBirthdays.length - 1), 150);
      }
    }
  };
  return (
    <>
      <SubHeading>Next Birthday</SubHeading>
      <Container
        onTouchStart={(event: any) => {
          if (nextBirthdays.length > 1) {
            handleTouch("start", event);
          }
        }}
        onTouchEnd={(event: any) => handleTouch("end", event)}
        animation={animation}
      >
        <UserContainer>
          <UserImage src={user} imageWidth={70} />
          <UserDetails>
            <UserDetail>{`${
              nextBirthdays
                ? `${nextBirthdays[currentBirthday].firstName} ${nextBirthdays[currentBirthday].lastName}`
                : ""
            }`}</UserDetail>
            <UserDetail>{`${
              nextBirthdays ? `${nextBirthdays[currentBirthday].birthday}` : ""
            }`}</UserDetail>
            <UserDetail>
              {nextBirthdays
                ? checkAge(nextBirthdays[currentBirthday].birthday) + 1
                : ""}{" "}
              Years old
            </UserDetail>
          </UserDetails>
        </UserContainer>
      </Container>
      <SeparationLine distanceBottom={10} />
    </>
  );
};

export default NextBirthday;
