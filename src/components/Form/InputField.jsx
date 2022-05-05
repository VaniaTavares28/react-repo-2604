import React from "react";
import { capitalizeStrings } from "../../helpers/functions";

const InputField = ({ field, handleChange, showPassword, value }) => {
  const { name, placeholder, inputType } = field;
  return (
    <>
      <label htmlFor={name}>{capitalizeStrings(name)}:</label>
      <input
        type={name === "password" && showPassword ? "text" : inputType}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, name)}
      />
      <br />
    </>
  );
};

export default InputField;
