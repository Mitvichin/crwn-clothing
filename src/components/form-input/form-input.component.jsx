import React from "react";
import * as S from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <S.Group>
    <S.FormInput onChange={handleChange} {...otherProps} />
    {label ? (
      <S.FormInputLabel {...otherProps}>{label}</S.FormInputLabel>
    ) : null}
  </S.Group>
);

export default FormInput;
