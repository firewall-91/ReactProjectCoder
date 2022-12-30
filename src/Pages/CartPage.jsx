import React from 'react';
import CartListItem from '../Components/CartListItem';

const CartPage = () => {
  return (
    <main className="h-min-main bg-neutral-200">
      <div className="flex justify-center items-center w-full h-52 relative">
        <img
          className="w-full h-full object-cover absolute brightness-75 blur-[1px]"
          src="https://thumbs.dreamstime.com/b/banner-guitars-displayed-row-music-store-168908141.jpg"
          alt=""
        />
        <div className="relative text-white text-center">
          <h1 className="font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase ">
            tus productos
          </h1>
          <h2 className="font-medium">
            Estas a un paso de finalizar tu compra
          </h2>
        </div>
      </div>

      <div className="items-center text-center w-full h-full p-4 ">
        <CartListItem />
      </div>
    </main>
  );
};

export default CartPage;