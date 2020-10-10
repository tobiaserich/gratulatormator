const checkAge = (birthday: any) => {
  let alreadyBirthday = false;
  const birthdayArr = birthday.split(".");
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const currentYear = new Date().getFullYear();
  const birthdayMonth = birthdayArr[1];
  const birthdayDay = birthdayArr[0];
  const birthdayYear = birthdayArr[2];

  if (currentMonth > birthdayMonth) {
    alreadyBirthday = true;
  } else if (
    currentMonth === parseInt(birthdayMonth) &&
    birthdayDay < currentDay
  ) {
    alreadyBirthday = true;
  }

  const calculateBirthday = currentYear - birthdayYear;
  return alreadyBirthday ? calculateBirthday : calculateBirthday - 1;
};

export default checkAge;
