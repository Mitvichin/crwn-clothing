import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "./cart-icon.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export const CartIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
