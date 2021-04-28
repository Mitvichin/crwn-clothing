import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import * as S from "./checkout-page.styles";

const CheckoutPage = ({ cartItems, total, clearItemFromCart }) => (
  <S.CheckoutPage>
    <S.CheckoutHeader>
      <S.HeaderBlock>
        <span>Product</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Description</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Quantity</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Price</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Remove</span>
      </S.HeaderBlock>
    </S.CheckoutHeader>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <S.Total>
      <span>TOTAL: ${total}</span>
    </S.Total>
    <S.TestWarning>
      *Please this card at checkout:
      <br />
      4242 4242 4242 4242 Exp: 12/25 CVV: 123
    </S.TestWarning>
    <StripeButton price={total} />
  </S.CheckoutPage>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
