import React from "react";
import MonthlyBirthdayCalendar from "./MonthlyBirthdayCalendar";
import sortBirthday from "../assets/helper/sortBirthday";

const BirthdayCalendar = ({ allBirthdays }: any) => {
  const showBirthday = (month: any) => {
    const birthdays: any = [];
    allBirthdays.map(async (birthday: any, index: any) => {
      const regex = /(\.)\d{2}/;
      const result = birthday["birthday"];
      const regexCheck = regex.exec(result);
      if (regexCheck![0] !== null) {
        if (regexCheck![0] === month) {
          birthdays.push(birthday);
        }
      }
    });

    const sortedBirthdays = sortBirthday(birthdays);
    return sortedBirthdays;
  };

  return (
    <>
      {showBirthday(".01").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="January"
          birthdayChildren={showBirthday(".01")}
        />
      ) : (
        <></>
      )}

      {showBirthday(".02").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="February"
          birthdayChildren={showBirthday(".02")}
        />
      ) : (
        <></>
      )}

      {showBirthday(".03").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="March"
          birthdayChildren={showBirthday(".03")}
        />
      ) : (
        <></>
      )}

      {showBirthday(".04").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="April"
          birthdayChildren={showBirthday(".04")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".05").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="May"
          birthdayChildren={showBirthday(".05")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".06").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="June"
          birthdayChildren={showBirthday(".06")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".07").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="July"
          birthdayChildren={showBirthday(".07")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".08").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="August"
          birthdayChildren={showBirthday(".08")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".09").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="September"
          birthdayChildren={showBirthday(".09")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".10").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="October"
          birthdayChildren={showBirthday(".10")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".11").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="November"
          birthdayChildren={showBirthday(".11")}
        />
      ) : (
        <></>
      )}
      {showBirthday(".12").length > 0 ? (
        <MonthlyBirthdayCalendar
          month="December"
          birthdayChildren={showBirthday(".12")}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BirthdayCalendar;
