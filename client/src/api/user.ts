
const registerUser = async (userData: object): Promise<string[]> => {
  const response = await fetch("/user/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  return result;
};

const loginUser = async (username: string, password: string): Promise<any> => {
  const userData = { username, password };
  const response = await fetch("/user/login/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  return result;
};

const verifyUser = async (): Promise<any> => {
  const response = await fetch("/user/verify/", {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();

  return result;
};

export { registerUser, loginUser, verifyUser };
