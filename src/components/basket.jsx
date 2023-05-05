import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate, Link } from "react-router-dom";
import { UpIcon, DownIcon, TrashIcon } from "./icons";
import { useEffect } from "react";

function Basket() {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  const { getCartItems, removeProduct, increaseQuantity, decreaseQuantity, clearBasket } = useContext(CartContext);
  
 
  useEffect(() => {
      setCartItems(getCartItems());
  }, [getCartItems]);

  const renderCart = () => {
      if (cartItems.length > 0) {
          return cartItems.map((p) => (
              <React.Fragment key={p.id}>
                   <div className="flex">
            <div className="font-bold w-56 m-2 md:w-72">
              <Link to={`products/${p.id}`}>{p.title}</Link>
            </div>
            <div className="flex -ml-3 md:ml-8">
              <div className="basketqty ml-10 md:ml-10 p-1">{p.quantity}</div>
              <div className="flex -m-8">
                <UpIcon
                  className="-ml-5"
                  width={20}
                  onClick={() => setCartItems(increaseQuantity({ id: p.id }))}
                />
                <DownIcon
                  className="-m-5"
                  width={20}
                  onClick={() =>setCartItems(decreaseQuantity({ id: p.id }))}
                />
                <TrashIcon
                  className="-m-5"
                  width={20}
                  onClick={() => setCartItems(removeProduct({ id: p.id }))} 
                />
              </div>
            </div>
            <div className=" flex-auto ml-48 md:ml-80 md:pl-9">${p.price}</div>
          </div>
          <hr className="my-3" />
              </React.Fragment>
          ));
      } else {
          return <div>The basket is currently empty</div>;
      }
  };

  const renderTotal = () => {
      const cartItems = getCartItems();
      const total = cartItems.reduce(
          (total, item) => (total += item.price * item.quantity),0);
      return total;
  };

  return (
    <div className="">
      <div className="basketContainer">
        <div className="basketHeader columns-2">
          <div className="baskettitle  text-2xl font-bold mt-5 m-10">
            Shoping Basket
          </div>
          <div
            onClick={() => navigate("/checkout")}
            className="basketcheckout bg-slate-300 p-1 h-fit w-fit rounded-md cursor-pointer m-5 float-right"
          >
            Checkout
          </div>
        </div>
        <div className="baskettable">
          <div className="basketheader mx-10 mt-10 flex md:space-x-80 space-x-40">
            <h4 className="text-xl">Item</h4>
            <h4 className="text-xl">Quantity</h4>
            <h4 className="text-xl">Price</h4>
          </div>
          <hr className=" " />
          <div className="basketheaderline">
            <div className="basketheader text-xl m-10">{renderCart()}</div>
          </div>
        </div>
        <div className="flex columns-2 ml-5 gap-64">
              <div
                onClick={() => setCartItems(clearBasket())}
                className="clearbutton bg-slate-300 p-1 md:p-2 rounded-md m-5 cursor-pointer w-fit"
              >
                Clear
              </div>
              <div className="baskettotal m-5 font-bold text-xl mt-5">Total: ${renderTotal()}</div>
            </div>
      </div>
    </div>
  );
}

export default Basket;
