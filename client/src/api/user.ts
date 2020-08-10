const registerUser = async (userData: any) => {
  console.log(userData);
  return await fetch("/user/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export { registerUser };
