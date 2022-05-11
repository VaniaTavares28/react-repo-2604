import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../context/CartContext";
import { Cart, Header, Form } from "../../components";

const ResetPassword = () => {
  const { showCart, openCart, closeCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleReset = ({ email, password }) => {
    if (password?.length && email?.length) {
      const usersStored = localStorage.getItem("users");
      if (!usersStored) {
        toast.error("Must register");
        setTimeout(() => navigate("/register"), 2300);
        return;
      }
      let users = JSON.parse(usersStored);
      const foundIndex = users.findIndex((user) => user.email === email);
      if (foundIndex === -1) toast.error("Invalid credentials");
      else {
        users[foundIndex].password = password;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("loggedIn", users[foundIndex].username);
        toast.success(`Please login, ${users[foundIndex].username}`);
        setTimeout(() => navigate("/login"), 2300);
      }
    } else {
      toast.error("All fields need to be filled.");
    }
  };

  return (
    <>
      {showCart && <Cart closeCart={closeCart} />}
      <section>
        <Header openCart={openCart} />
        <Form category="reset" submission={handleReset} />
      </section>
    </>
  );
};

export default ResetPassword;
