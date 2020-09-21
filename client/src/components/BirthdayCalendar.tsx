import React from "react";
import MonthlyBirthdayCalendar from "./MonthlyBirthdayCalendar";
import { getAllBirthdays } from "../api/birthdays";

const BirthdayCalendar = () => {
  const [allBirthdays, setAllBirthdays] = React.useState([
    { birthday: "01.01.1111" },
  ]);

  const showBirthday = (month: any) => {
    const birthdays: any = [];
    allBirthdays?.map(async (birthday: any, index) => {
      const regex = /(\.)\d{2}/;
      const result = birthday["birthday"];
      const regexCheck = regex.exec(result);
      if (regexCheck![0] !== null) {
        if (regexCheck![0] === month) {
          birthdays.push(birthday);
        }
      }
    });

    return birthdays;
  };

  React.useEffect(() => {
    const getBirthdays = async () => {
      const birthdays = await getAllBirthdays();
      setAllBirthdays(birthdays);
    };
    getBirthdays();
  }, []);

  return (
    <>
      <MonthlyBirthdayCalendar
        month="January"
        birthdayChildren={showBirthday(".01")}
      />
      <MonthlyBirthdayCalendar
        month="February"
        birthdayChildren={showBirthday(".02")}
      />
      <MonthlyBirthdayCalendar
        month="March"
        birthdayChildren={showBirthday(".03")}
      />
      <MonthlyBirthdayCalendar
        month="April"
        birthdayChildren={showBirthday(".04")}
      />
      <MonthlyBirthdayCalendar
        month="May"
        birthdayChildren={showBirthday(".05")}
      />
      <MonthlyBirthdayCalendar
        month="June"
        birthdayChildren={showBirthday(".06")}
      />
      <MonthlyBirthdayCalendar
        month="July"
        birthdayChildren={showBirthday(".07")}
      />
      <MonthlyBirthdayCalendar
        month="August"
        birthdayChildren={showBirthday(".08")}
      />
      <MonthlyBirthdayCalendar
        month="September"
        birthdayChildren={showBirthday(".09")}
      />
      <MonthlyBirthdayCalendar
        month="October"
        birthdayChildren={showBirthday(".10")}
      />
      <MonthlyBirthdayCalendar
        month="November"
        birthdayChildren={showBirthday(".11")}
      />
      <MonthlyBirthdayCalendar
        month="December"
        birthdayChildren={showBirthday(".12")}
      />
    </>
  );
};

export default BirthdayCalendar;
