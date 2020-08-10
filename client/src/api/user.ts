const registerUser = async (userData: any) => {
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

export { registerUser };
