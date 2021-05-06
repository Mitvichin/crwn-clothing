import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutFailure = () => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signUpStart = (userDetails) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userDetails,
});

export const signUpFailure = () => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
});

export const signUpSuccess = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: emailAndPassword,
});
