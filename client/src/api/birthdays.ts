const addBirthday = async (birthdayData: any) => {
  const response = await fetch("/birthday/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(birthdayData),
  });

  const result = await response.json();
  return result;
};

export { addBirthday };
