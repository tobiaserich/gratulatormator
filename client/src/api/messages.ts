const getAvailableMessages = async (category: string) => {
  const response = await fetch(`/messages/allAvailable/${category}`, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

export { getAvailableMessages };
