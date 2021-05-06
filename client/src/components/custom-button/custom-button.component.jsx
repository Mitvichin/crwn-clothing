import React from "react";
import * as S from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <S.CustomButton {...otherProps}>{children}</S.CustomButton>
);

export default CustomButton;
