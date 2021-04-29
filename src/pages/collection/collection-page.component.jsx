import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import * as S from "./collection-page.styles";

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

export default CollectionPage;
