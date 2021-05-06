import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import * as S from "./directory.styles";

const Directory = ({ sections }) => (
  <S.DirectoryMenu>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </S.DirectoryMenu>
);

const mapStoreToState = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStoreToState)(Directory);
