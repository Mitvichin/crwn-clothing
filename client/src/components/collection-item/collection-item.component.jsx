import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import * as S from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <S.CollectionItem>
      <S.Image style={{ backgroundImage: `url(${imageUrl})` }}></S.Image>
      <S.CollectionFooter>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.CollectionFooter>
      <S.CustomBtn inverted onClick={() => addItem(item)}>
        Add to cart
      </S.CustomBtn>
    </S.CollectionItem>
  );
};

const matchDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, matchDispatchToProps)(CollectionItem);
