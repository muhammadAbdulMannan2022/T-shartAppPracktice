import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { createContext, useState } from "react";

export const TheTrueContext = createContext(null);
function App() {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };
  const handleNavIsOpen = () => {
    setNavIsOpen(!navIsOpen);
  };
  const handleAddToCart = (product) => {
    const alradiIn = cart.find((crt) => crt === product);
    if (alradiIn) {
      const restOfProductInCart = cart.filter((crt) => crt !== alradiIn);
      alradiIn.index = alradiIn.index + 1;
      const newCart = [...restOfProductInCart, alradiIn];
      setCart(newCart);
    } else {
      product.index = 1;
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((crt) => crt._id !== id);
    setCart(newCart);
  };
  return (
    <div className="App">
      <Navbar
        navIsOpen={navIsOpen}
        handleNavIsOpen={handleNavIsOpen}
        handleCartIsOpen={handleCartIsOpen}
      />
      <div className="transition-all duration-300 ease-in">
        <Cart
          handleRemoveFromCart={handleRemoveFromCart}
          cartData={cart}
          isOpen={cartIsOpen}
        />
      </div>
      <TheTrueContext.Provider value={handleAddToCart}>
        <Outlet />
      </TheTrueContext.Provider>
    </div>
  );
}

export default App;
