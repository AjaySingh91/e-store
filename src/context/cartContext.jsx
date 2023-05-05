import React, {createContext ,useReducer} from "react";              // createContext use for taking the state of anythink to another page like {add to cart}
// import { Reducer } from "react";             // reducer allow to edit the state which context don't allow :here it is used for changing initial state 
import { CartReducer } from "./cartReducer";

const storage = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

export const CartContext = createContext();

const initialState = {cartItems: storage}

const CartContextProvider = ({children}) => {
    const [state ,dispatch] = useReducer(CartReducer,initialState);

    const addProduct = payload => { 
        dispatch({type: 'ADD',payload});
        return state.cartItems;
    }
    const removeProduct = payload => {
        dispatch({type: 'REMOVE',payload});
        return state.cartItems;
    }
    const increaseQuantity = payload => {
        dispatch({type: 'INCQTY',payload});
        return state.cartItems
    }
    const decreaseQuantity = payload => {
        dispatch({type: 'DECQTY',payload});
        return state.cartItems;
    }
    const clearBasket = () => {
        dispatch({type: 'CLEAR',payload: undefined}); 
        return state.cartItems;
    }

    const getCartItems = () => {
        return state.cartItems;
    }
    const contectValue ={
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getCartItems,
        ...state
    }

    return(
        <CartContext.Provider  value={contectValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;