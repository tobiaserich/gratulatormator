
const showBirthdayForMonth = (month: string, allBirthdays: any) => {
  if (allBirthdays) {
    const birthdays: string[] = [];
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

    return birthdays;
  } else {
    return;
  }
};

export default showBirthdayForMonth;
