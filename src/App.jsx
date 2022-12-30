import React from "react";
import CartProvider from "./Context/CartContext";
import AppRoutes from "./Routes/AppRoutes";



export default function App() {
  return (
    <>
    <CartProvider>
    
      <AppRoutes/>

    </CartProvider>
    
    </>
  );
}