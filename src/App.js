import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component";
import Checkout from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  unsubscribeAuth = null;
  unsubscribeSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("in auth subs");
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeSnapshot = userRef.onSnapshot((snapShot) => {
          console.log("in snapshot");
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
        this.unsubscribeSnapshot && this.unsubscribeSnapshot();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
