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

const deleteBirthday = async (id: string) => {
  const response = await fetch(`/birthday/deleteSingleBirthday/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

const updateRemindMe = async (id: string, remindMeValue: boolean) => {
  const response = await fetch("/birthday/updateRemindMe/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, remindMeValue }),
  });
};

const updateRemindMeDays = async (id: string, remindMeDays: string) => {
  const response = fetch("/birthday/updateRemindMeDays/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, remindMeDays }),
  });
};

export {
  addBirthday,
  getAllBirthdays,
  getBirthday,
  deleteBirthday,
  updateRemindMe,
  updateRemindMeDays,
};
