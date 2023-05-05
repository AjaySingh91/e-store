import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    shipingAddress: "",
  });
  const navigate = useNavigate();

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    phone: form.phone.length === 0,
    // shipingAddress1: form.shipingAddress1.length === 0
  };
  const disabled = Object.keys(errors).some((x) => errors[x]);

  const handelchange = (ev) => {
    const { name, value } = ev.target;

    setform((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handelSubmit = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    navigate("/OrderConfirmation");
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="checkoutContainer m-5">
          <div className="checkoutHeader text-2xl m-5 font-black">
            Shoping Checkout
          </div>
          <div className="yourItems text-xl font-bold">Your Details</div>
          <hr />
          <div className="personalInfo flex-row md:flex space-x-10 space-y-3">
            <div></div>
            <div>
              <input
                className=" border-2 p-2 border-black rounded-md w-full md:w-80 "
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handelchange}
              />
            </div>
            <div>
              <input
                className=" border-2 p-2 border-black rounded-md w-full md:w-80"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handelchange}
                
              />
            </div>
            <div>
              <input
                className=" border-2 p-2 border-black rounded-md w-full md:w-80"
                type="text"
                name="phone"
                placeholder="Enter Phone"
                onChange={handelchange}
              />
            </div>
          </div>
          <div className="checkoutCheakbox font-bold text-xl m-5">
            Copy to shiping
            <input
              className=" m-1 "
              type="checkbox"
              name="copy to shipping"
              id=""
            />
          </div>
          <div className="AddresDetail md:flex space-x-10 md:space-x-14">
            <div className="billingAddres ">
              <div className="shhipingTitle font-bold text-xl my-5 ">
                Billing Addres
              </div>
              <div className="inputs  space-y-3 ml-10">
                <input
                  className=" border-2 p-2 border-black rounded-md w-full "
                  type="text"
                  name="billingAddress1"
                />
                <input
                  className=" border-2 p-2 border-black rounded-md w-full"
                  type="text"
                  name="billingAddress2"
                />
                <input
                  className=" border-2 p-2 border-black rounded-md w-full"
                  type="text"
                  name="billingCity"
                />
              </div>
            </div>
            <div className="shippingAddress">
              <div className="shhipingTitle font-bold text-xl my-5 -ml-10">
                Shipping Addres
              </div>
              <div className="inputs md:flex-row space-y-3 ">
                <input
                  className="shipingAddress1 border-2 p-2 border-black rounded-md w-full "
                  type="text"
                  name="shipingAddress1"
                  placeholder="Enter first Line"
                  onChange={handelchange}
                />
                <input
                  className=" border-2 p-2 border-black rounded-md w-full "
                  type="text"
                  name="shipingAddress2"
                />
                <input
                  className=" border-2 p-2 border-black rounded-md w-full "
                  type="text"
                  name="shipingCity"
                />
              </div>
            </div>
          </div>
          <div className="checkoutbottom columns-2 m-10">
            <div
              onClick={() => navigate("/basket")}
              className="checkoutCancel border-2 p-2 bg-slate-300 border-black rounded-md w-fit cursor-pointer"
            >
              Cancel
            </div >
            <button disabled={disabled} className="comfirmOrder border-2 p-2 bg-slate-300 border-black rounded-md w-fit float-right cursor-pointer disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-300">
              Comfirm Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
