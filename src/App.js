import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component";
import CheckoutPage from "./pages/checkout/checkout-page.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
