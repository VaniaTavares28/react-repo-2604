import './App.css';
import { ToastContainer } from "react-toastify";
import { CartContextProvider } from './context/CartContext';
// import Home from './views/Home';

  import "react-toastify/dist/ReactToastify.css";
import { Form } from "./components";

function App() {
  return (
    <>
      <CartContextProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* <Home /> */}
        <Form category="login" />
      </CartContextProvider>
    </>
  );
}

export default App;
