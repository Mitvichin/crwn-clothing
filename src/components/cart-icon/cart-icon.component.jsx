import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import * as S from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <S.CartIcon onClick={toggleCartHidden}>
    <S.ShoppingIcon />
    <S.ItemCount>{itemCount}</S.ItemCount>
  </S.CartIcon>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
