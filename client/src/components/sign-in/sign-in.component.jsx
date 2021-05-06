import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import * as S from "./sign-in.styles";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    console.log("akjsndaksd");
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <S.SignIn>
      <S.Title>I already have an account</S.Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <label></label>

        <S.Buttons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </S.Buttons>
      </form>
    </S.SignIn>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
