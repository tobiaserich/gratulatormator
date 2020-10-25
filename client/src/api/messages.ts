const getAvailableMessages = async (category: string): Promise<any> => {
  const response = await fetch(`/messages/allAvailable/${category}`, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  return result;
};

export { getAvailableMessages };
