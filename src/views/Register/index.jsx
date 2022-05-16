import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../context/CartContext";
import { Cart, Header, Form } from "../../components";

const Register = () => {
  const { showCart, openCart, closeCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRegister = ({ username, email, password }) => {
    if (email?.length && password?.length && username?.length) {
      const usersStored = localStorage.getItem("users");
      let users = usersStored ? JSON.parse(usersStored) : [];
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedIn", username);
      toast.success(`Welcome ${username}`);
      setTimeout(() => navigate("/"), 2300);
    } else {
      toast.error("All fields need to be filled.");
    }
  };

  return (
    <>
      {showCart && <Cart closeCart={closeCart} />}
      <section>
        <Header openCart={openCart} />
        <Form category="register" submission={handleRegister} />
      </section>
    </>
  );
};

export default Register;
