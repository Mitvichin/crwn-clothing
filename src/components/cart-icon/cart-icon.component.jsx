import React from "react";
import * as S from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <S.CartIcon onClick={toggleCartHidden}>
    <S.ShoppingIcon />
    <S.ItemCount>{itemCount}</S.ItemCount>
  </S.CartIcon>
);

export default CartIcon;
