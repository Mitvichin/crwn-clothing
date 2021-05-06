import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import * as S from "./sign-in-and-sign-up-page.styles";

const SignInAndSignUp = () => (
  <S.SignInAndSignUp>
    <SignIn />
    <SignUp />
  </S.SignInAndSignUp>
);

export default SignInAndSignUp;
