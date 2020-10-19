import splitBirthday from "./splitBirthdays";

const sortBirthday = (birthdays: any) => {
  const result = birthdays.sort(
    (initialBirthday: any, comparingBirthday: any) => {
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
    }
  );
  return result;
};

export default sortBirthday;
