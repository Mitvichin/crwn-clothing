import React from "react";
import * as S from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <S.CartItem>
    <S.Img src={imageUrl} alt="item" />
    <S.ItemDetails>
      <S.Name>{name}</S.Name>
      <span>
        {quantity} x ${price}
      </span>
    </S.ItemDetails>
  </S.CartItem>
);

export default React.memo(CartItem);
