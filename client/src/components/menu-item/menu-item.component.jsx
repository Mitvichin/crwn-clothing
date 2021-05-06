import React from "react";
import { withRouter } from "react-router-dom";
import * as S from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <S.MenuItem
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <S.BackgroudImage style={{ backgroundImage: `url(${imageUrl})` }} />
    <S.Content>
      <S.Title>{title.toUpperCase()}</S.Title>
      <S.SubTitle>SHOP NOW</S.SubTitle>
    </S.Content>
  </S.MenuItem>
);

export default withRouter(MenuItem);
