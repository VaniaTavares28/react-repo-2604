import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { capitalizeStrings } from "../../helpers/functions";

const InputField = ({ field, handleChange, value }) => {
  const [showPassword, setShowPassord] = useState(false);
  const { name, inputType } = field;
  const togglePassword = () => setShowPassord(!showPassword);
  return (
    <>
      {name === "password" ? (
        <div className="password-input">
          <input
            type={name === "password" && showPassword ? "text" : inputType}
            id={name}
            name={name}
            value={value}
            placeholder={capitalizeStrings(name)}
            onChange={(e) => handleChange(e, name)}
          />
          {showPassword ? (
            <AiFillEyeInvisible
              size={14}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "18px",
                right: "15px",
              }}
              onClick={togglePassword}
            />
          ) : (
            <AiFillEye
              size={14}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "18px",
                right: "15px",
              }}
              onClick={togglePassword}
            />
          )}
        </div>
      ) : (
        <input
          type={name === "password" && showPassword ? "text" : inputType}
          id={name}
          name={name}
          value={value}
          placeholder={capitalizeStrings(name)}
          onChange={(e) => handleChange(e, name)}
        />
      )}
      <br />
    </>
  );
};

export default InputField;
