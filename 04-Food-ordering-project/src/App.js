import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log("showCartHandler");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("hideCartHandler");
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowhandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/hkharekrushna/react-projects.git
// git push -u origin main
