import ShopActionTypes from "./shop.types";
import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  dispatch(fetchCollectionsStart());
  const collectionsRef = firestore.collection("collections");

  collectionsRef.get().then(
    (snapshot) => {
      const collectionsMap = converCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    },
    (error) => dispatch(fetchCollectionFailure(error.message))
  );
};
