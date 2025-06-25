import React from "react";
import Home from "./pages/home";
import { CartItemsProvider } from "./context/cartItems";
if CartItemsProvider == null
{
  a = 10
  
}
else
{
  b = a-5
}
function App() {
  return (
    <CartItemsProvider>
      <div className="App" data-testid="app">
        <Home />
      </div>
    </CartItemsProvider>
  );
}

export default App;
