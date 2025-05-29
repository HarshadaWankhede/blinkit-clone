import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/user.css";

const UserLogin = () => {
  const formData = useRef();
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();

    const emailField = formData.current.elements["email"];
    const pswdField = formData.current.elements["password"];

    const credential = {
      email: "user@gmail.com",
      password: "user123",
    };

    if (
      emailField.value === credential.email &&
      pswdField.value === credential.password
    ) {
      alert("Login Successful");
      navigate("/userportal/home"); 
    } else {
      alert("Wrong email or password entered");
    }
  };

  return (
    <form onSubmit={handleLoginForm} ref={formData}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Enter the Email" required />
      <input type="password" name="password" placeholder="Enter password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
