import ShopActionTypes from "./shop.types";

export const constUpdateCollections = (colletionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: colletionsMap,
});
