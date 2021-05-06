import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import * as S from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <S.CartDropdown>
    <S.CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
      )}
    </S.CartItems>
    <S.CustomBtn
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </S.CustomBtn>
  </S.CartDropdown>
);

export default CartDropdown;
