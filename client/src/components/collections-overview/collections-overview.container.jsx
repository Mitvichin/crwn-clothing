import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  selectAreShopCollectionsLoaded,
  selectShopCollectionsForPreview,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
  isLoading: (state) => !selectAreShopCollectionsLoaded(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
