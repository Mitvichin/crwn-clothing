import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import * as S from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <S.CollectionsOverview>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </S.CollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview));
