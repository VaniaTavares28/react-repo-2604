import './App.css';
import { CartContextProvider } from './context/CartContext';
import Home from './views/Home';

function App() {
  return (
    <>
      <CartContextProvider>
      <Home/>
      </CartContextProvider>
    </>
  );
}

export default App;
