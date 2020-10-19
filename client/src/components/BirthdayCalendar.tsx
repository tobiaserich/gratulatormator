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

    const splitBirthday = (birthday: string) => {
      const splittedBirthday = birthday.split(".");
      splittedBirthday[0] = `${splittedBirthday[0]}.${splittedBirthday[1]}`;
      splittedBirthday.splice(1, 1);
      return splittedBirthday;
    };

    birthdays.sort((initialBirthday: any, comparingBirthday: any) => {
      const splittedInitialBirthday = splitBirthday(initialBirthday.birthday);
      const splittedComparingBirthday = splitBirthday(
        comparingBirthday.birthday
      );

      if (splittedInitialBirthday[0] === splittedComparingBirthday[0]) {
        if (splittedInitialBirthday[1] < splittedComparingBirthday[1]) {
          return 1;
        }
        if (splittedInitialBirthday[1] > splittedComparingBirthday[1]) {
          return -1;
        }
      } else {
        if (initialBirthday.birthday < comparingBirthday.birthday) {
          return -1;
        }
        if (initialBirthday.birthday > comparingBirthday.birthday) {
          return 1;
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
