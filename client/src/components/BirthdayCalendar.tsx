import React from "react";
import MonthlyBirthdayCalendar from "./MonthlyBirthdayCalendar";

const BirthdayCalendar = () => {
  return (
    <>
      <MonthlyBirthdayCalendar month="April" />
      <MonthlyBirthdayCalendar month="May" />
      <MonthlyBirthdayCalendar month="June" />
      <MonthlyBirthdayCalendar month="July" />
      <MonthlyBirthdayCalendar month="August" />
    </>
  );
};

export default BirthdayCalendar;
