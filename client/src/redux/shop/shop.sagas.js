import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  converCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import {
  fetchCollectionFailure,
  fetchCollectionSuccess,
} from "./shops.actions";

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

function* onFetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(onFetchCollectionStart)]);
}
