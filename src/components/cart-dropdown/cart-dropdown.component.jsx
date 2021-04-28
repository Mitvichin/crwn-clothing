import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import * as S from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <S.CartDropdown>
    <S.CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem id={cartItem.id} item={cartItem} />
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
