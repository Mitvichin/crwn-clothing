import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection-page.component";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  converCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { constUpdateCollections } from "../../redux/shop/shops.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeCollections = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsRef = firestore.collection("collections");

    this.unsubscribeCollections = collectionsRef.onSnapshot((snapshot) => {
      const collectionMap = converCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeCollections();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverview isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPage isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) =>
    dispatch(constUpdateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
