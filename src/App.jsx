import { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3000/", {
          method: "GET",
          headers: { "Content-Type": "application/json"},
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error("Failed to fetch message");
        }
        const responseData = await response.json();
        console.log(responseData)
        setMessage(responseData.msg);
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Failed to fetch message");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchMessage();
    }
  }, [isLoading])

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default App;
