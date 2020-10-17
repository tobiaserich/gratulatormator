const getAvailableMessages = async () => {
  const response = await fetch("/messages/allAvailable", {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

export { getAvailableMessages };
