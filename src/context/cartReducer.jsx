const storage = (cartItems) =>{
  sessionStorage.setItem('cart' , JSON.stringify(cartItems.length > 0 ? cartItems: []))
}

export const CartReducer = (state, action) => {
  let index = -1;
  if (action.payload) 
    index = state.cartItems.findIndex(x => x.id === action.payload.id);

  let newItems = [...state.cartItems];
  switch (action.type) {
    case "ADD":
    case "INCQTY":
      if (index === -1) {
        newItems.push({ ...action.payload, quantity: 1 });
        // state.cartItems.push({...action.payload,quantity: 1});    bad way beacuse its updating the existing array
      } else { 
        // state.cartItems[index].quantity++;
        newItems[index].quantity++;
      }
      break;

    case "REMOVE":
      if (index > -1) {
        // state.cartItems.splice(index ,1);  Bad Way of doing this beacuse its not returning a new array and its trying to modify the existing state
        newItems = state.cartItems.filter((x) => x.id !== action.payload.id);
      }
      break;

    case "DECQTY":
      if (index > -1) {
        if (newItems[index].quantity > 1) {
          newItems[index].quantity--;
          // state.cartItems[index].quantity--;
        }
      }
      break;

    case "CLEAR":
      newItems = [];
      break;

    default:
      break;
  }
  state.cartItems = newItems;
  storage(newItems);
  return state;
};
