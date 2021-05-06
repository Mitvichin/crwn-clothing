import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import * as S from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <S.CollectionsOverview>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </S.CollectionsOverview>
);

export default CollectionsOverview;
