import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import * as S from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = signUpInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Passoword do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <S.SignUp>
      <S.Title>I do not have an accout</S.Title>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </S.SignUp>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignUp);
