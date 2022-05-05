import React, { useState } from "react";
import { toast } from "react-toastify";
import { inputFields } from "../../helpers/constants";
import { capitalizeStrings } from "../../helpers/functions";
import InputField from "./InputField";
import "./style.scss";

const Form = ({ category, setCategory, setShowForm }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassord] = useState(false);

  const handleChange = (e, fieldName) => {
    if (fieldName === "username") {
      setUsername(e.target.value);
    } else if (fieldName === "email") {
      setEmail(e.target.value);
    } else if (fieldName === "password") {
      setPassword(e.target.value);
    }
  };

  const handleCheckboxChange = () => setShowPassord(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (category === "register" && username.length && password.length) {
      const usersStored = localStorage.getItem("users");
      let users = usersStored ? JSON.parse(usersStored) : [];
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedIn", username);
      setUsername("");
      setEmail("");
      setPassword("");
      setShowPassord(false);
    } else if (category === "login" && username.length && password.length) {
      const usersStored = localStorage.getItem("users");
      if (!usersStored) {
        toast.error("Must register");
        setCategory("register");
        return;
      }
      let users = JSON.parse(usersStored);
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );
      console.log(foundUser);
      foundUser
        ? toast.success(`Welcome back, ${username}`)
        : toast.error("Invalid credentials");
      localStorage.setItem("loggedIn", username);
      setShowForm(false);
      setUsername("");
      setPassword("");
      setShowPassord(false);
    } else {
      toast.error("All fields need to be filled.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">{capitalizeStrings(category)}</h2>
      <button onClick={() => setShowForm(false)} className="btn-absolute">
        &#10005;
      </button>
      <form onSubmit={handleSubmit}>
        {inputFields
          .filter((field) => field.category.includes(category))
          .map((field) => (
            <InputField
              key={field.name + "form"}
              field={field}
              handleChange={handleChange}
              value={
                field.name === "username"
                  ? username
                  : field.name === "email"
                  ? email
                  : password
              }
              showPassword={showPassword}
            />
          ))}
        <label htmlFor="show password">{showPassword ? "Hide" : "Show"}:</label>
        <input
          id="show password"
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
