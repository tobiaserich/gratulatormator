const showBirthdayForMonth = (month: any, allBirthdays: any) => {
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

  return birthdays;
};

export default showBirthdayForMonth;