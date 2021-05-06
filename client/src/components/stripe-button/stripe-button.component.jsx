import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axions from "axios";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IktWYDWWUUl4XhCyX8e7RbemOz39PfcPkz9gzkYGM8IC4g8YeK1eKNwIuYmzhAhuIqeHzrHRmlnN8IIYO7UI77P002bOYawOM";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => alert("Payment successfull!"))
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "Payment failed! Please make sure you are using the provided credit card!"
        );
      });
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
