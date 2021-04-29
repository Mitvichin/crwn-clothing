import React from "react";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import * as S from "./collection-page.styles";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <S.CollectionPage>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Items>
    </S.CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(WithSpinner(CollectionPage));
