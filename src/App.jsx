import { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
          throw new Error("Failed to fetch message");
        }
        const data = await response.json();
        setMessage(data.msg);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Failed to fetch message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default App