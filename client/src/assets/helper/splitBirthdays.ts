const splitBirthday = (birthday: string) => {
  const splittedBirthday = birthday.split(".");
  splittedBirthday[0] = `${splittedBirthday[0]}.${splittedBirthday[1]}`;
  splittedBirthday.splice(1, 1);
  return splittedBirthday;
};

export default splitBirthday;
