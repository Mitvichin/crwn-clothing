import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IktWYDWWUUl4XhCyX8e7RbemOz39PfcPkz9gzkYGM8IC4g8YeK1eKNwIuYmzhAhuIqeHzrHRmlnN8IIYO7UI77P002bOYawOM";

  const onToken = (token) => {
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
