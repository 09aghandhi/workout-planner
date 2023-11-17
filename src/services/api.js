const BASE_URL = "http://localhost:5000";

export const sendMessage = async (message) => {
  const response = await fetch(`${BASE_URL}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return response.json();
};
