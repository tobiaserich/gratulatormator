import React from "react";
import MonthlyBirthdayCalendar from "./MonthlyBirthdayCalendar";
import sortBirthday from "../assets/helper/sortBirthday";

type mapBirthdayProps = {
  [index: number]: string;
  birthday: string;
};

const BirthdayCalendar = ({ allBirthdays }: any): JSX.Element => {
  const showBirthdays = (month: string) => {
    const birthdays: object[] = [];
    allBirthdays.map(async (birthday: mapBirthdayProps, index: number) => {
      const regex = /(\.)\d{2}/;
      const result = birthday["birthday"];
      // check if the month in the birthday is the same as in the function call.
      const regexCheck = regex.exec(result);
      if (regexCheck![0] !== null) {
        if (regexCheck![0] === month) {
          birthdays.push(birthday);
        }
      }
    });

    return sortBirthday(birthdays);
  };

  return (
    <>
      {showBirthdays(".01").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="January"
          birthdayChildren={showBirthdays(".01")}
        />
      ) : (
        <></>
      )}

      {showBirthdays(".02").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="February"
          birthdayChildren={showBirthdays(".02")}
        />
      ) : (
        <></>
      )}

      {showBirthdays(".03").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="March"
          birthdayChildren={showBirthdays(".03")}
        />
      ) : (
        <></>
      )}

      {showBirthdays(".04").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="April"
          birthdayChildren={showBirthdays(".04")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".05").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="May"
          birthdayChildren={showBirthdays(".05")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".06").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="June"
          birthdayChildren={showBirthdays(".06")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".07").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="July"
          birthdayChildren={showBirthdays(".07")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".08").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="August"
          birthdayChildren={showBirthdays(".08")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".09").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="September"
          birthdayChildren={showBirthdays(".09")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".10").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="October"
          birthdayChildren={showBirthdays(".10")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".11").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="November"
          birthdayChildren={showBirthdays(".11")}
        />
      ) : (
        <></>
      )}
      {showBirthdays(".12").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="December"
          birthdayChildren={showBirthdays(".12")}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BirthdayCalendar;
