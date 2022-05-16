import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { formInfo } from "../../helpers/constants";
import InputField from "./InputField";
import "./style.scss";

const Form = ({ category, submission }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, fieldName) => {
    if (fieldName === "username") {
      setUsername(e.target.value);
    } else if (fieldName === "email") {
      setEmail(e.target.value);
    } else if (fieldName === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submission({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h1 className="form-header">
        {category === "reset" ? `${category} password` : category}
      </h1>
      <form onSubmit={handleSubmit}>
        {formInfo.inputFields
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
            />
          ))}

        <input
          className="form-submit"
          type="submit"
          value={formInfo[category]}
        />
      </form>
      {category === "register" ? (
        <p>
          Already have an account? <NavLink to="/login">Sign in here.</NavLink>
        </p>
      ) : category === "login" ? (
        <>
          <p>
            <NavLink to="/reset">Forgot your password?</NavLink>
          </p>
          <p>
            Don't have an account?{" "}
            <NavLink to="/register">Register now.</NavLink>
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
