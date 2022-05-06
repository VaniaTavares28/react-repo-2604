import './App.css';
import { ToastContainer } from "react-toastify";
import { CartContextProvider } from './context/CartContext';
import Home from './views/Home';

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
        <Home />
      </CartContextProvider>
    </>
  );
}

export default App;
