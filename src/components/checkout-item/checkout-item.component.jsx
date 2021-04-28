import React from "react";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import * as S from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <S.CheckoutItem>
      <S.Image>
        <img alt="Item" src={imageUrl} />
      </S.Image>
      <S.Name>{name}</S.Name>
      <S.Quantity>
        <S.Arrow onClick={() => removeItem(cartItem)}>&#10094;</S.Arrow>
        <S.Value>{quantity}</S.Value>
        <S.Arrow onClick={() => addItem(cartItem)}>&#10095;</S.Arrow>
      </S.Quantity>
      <S.Price>{price}</S.Price>
      <S.RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </S.RemoveButton>
    </S.CheckoutItem>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
