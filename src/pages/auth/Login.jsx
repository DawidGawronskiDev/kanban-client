import { useState } from "react";
import config from "../../config";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${config.apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (response.status >= 400) {
      setMessage(responseData.message.toString());
      return;
    }

    setIsAuth(true);
  };

  return (
    <>
      {isAuth && <Navigate to={"/"} />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>

        {message && <p>{message}</p>}
      </form>
    </>
  );
};

export default Login;
