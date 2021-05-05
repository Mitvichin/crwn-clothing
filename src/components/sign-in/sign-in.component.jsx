import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import * as S from "./sign-in.styles";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <S.SignIn>
        <S.Title>I already have an account</S.Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
