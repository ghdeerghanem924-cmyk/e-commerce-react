import { cartActions } from "../slices/cartSlice";

export function addToCart(newItem) {
  return (dispatch, getState) => {
    try {


      dispatch(cartActions.addItemToCart(newItem));
      const {cart} = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));

    } catch (error) {
      console.log(error);
    }
  };
}


export function removeFromCart(id) {
    return (dispatch, getState) => {
      try {

  
        dispatch(cartActions.removeItemFromCart(id));
        const {cart} = getState();
        localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  
      } catch (error) {
        console.log(error);
      }
    };
  }
