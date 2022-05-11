import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../context/CartContext";
import { Cart, Header, Form } from "../../components";

const Login = () => {
  const { showCart, openCart, closeCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogin = ({ username, password }) => {
    if (password?.length && username?.length) {
      const usersStored = localStorage.getItem("users");
      if (!usersStored) {
        toast.error("Must register");
        setTimeout(() => navigate("/register"), 2300);
        return;
      }
      let users = JSON.parse(usersStored);
      const foundIndex = users.findIndex(
        (user) => user.username === username && user.password === password
      );
      if (foundIndex === -1) toast.error("Invalid credentials");
      else {
        toast.success(`Welcome back, ${username}`);
        setTimeout(() => navigate("/"), 2300);
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
        <Form category="login" submission={handleLogin} />
      </section>
    </>
  );
};

export default Login;
