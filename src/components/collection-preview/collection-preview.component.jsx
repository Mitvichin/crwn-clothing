import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import * as S from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <S.CollectionPreview>
    <S.Title>{title.toUpperCase()}</S.Title>
    <S.Preview>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </S.Preview>
  </S.CollectionPreview>
);

export default CollectionPreview;
