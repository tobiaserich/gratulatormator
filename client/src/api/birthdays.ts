type getBirthdayProps = {
  [index: string]: string | boolean;
};

const addBirthday = async (birthdayData: object): Promise<string> => {
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

const getAllBirthdays = async (): Promise<object> => {
  const response = await fetch("/birthday/allBirthdays/", {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

const getBirthday = async (id: string): Promise<getBirthdayProps> => {
  const response = await fetch(`/birthday/singleBirthday/${id}`, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

const deleteBirthday = async (id: string): Promise<any> => {
  const response = await fetch(`/birthday/deleteSingleBirthday/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

const updateRemindMe = async (
  id: string,
  remindMeValue: boolean
): Promise<void> => {
  const response = await fetch("/birthday/updateRemindMe/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, remindMeValue }),
  });
};

const updateRemindMeDays = async (
  id: string,
  remindMeDays: string
): Promise<void> => {
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
