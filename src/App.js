import React from "react";
import "./App.css";
import { HomePage } from "./pages/home/home-page.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
