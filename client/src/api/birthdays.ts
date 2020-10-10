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

const getAllBirthdays = async () => {
  const response = await fetch("/birthday/allBirthdays/", {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

const getBirthday = async (id: any) => {
  const response = await fetch(`/birthday/singleBirthday/${id}`, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

export { addBirthday, getAllBirthdays, getBirthday };
