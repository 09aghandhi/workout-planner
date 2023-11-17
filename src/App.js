import React, { useState } from "react";
import UserInput from "./UserInput";
import { sendMessage } from "./services/api";

const App = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendMessage = async (message) => {
    try {
      const response = await sendMessage(message);
      console.log(response);
      setResponseMessage(response.workoutPlan.content);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>Workout App</h1>
      <UserInput onSendMessage={handleSendMessage} />
      {responseMessage && (
        <div>
          <h2>Response:</h2>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default App;
