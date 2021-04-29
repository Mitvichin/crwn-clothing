import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  selectAreShopCollectionsLoaded,
  selectShopCollection,
} from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection-page.component";

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) =>
    selectShopCollection(ownProps.match.params.collectionId)(state),
  isLoading: (state) => !selectAreShopCollectionsLoaded(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
