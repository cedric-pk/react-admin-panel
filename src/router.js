import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import Transition from './components/utility/transitionSwitch';
import App from "./containers/App";
import asyncComponent from "./helpers/AsyncFunc";
import Auth0 from "./helpers/auth0";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <BrowserRouter>
    <div>
      {/* <Transition> */}
      <Route
        exact
        path="/"
        component={asyncComponent(() => import("./containers/Page/signin"))}
      />
      <Route
        exact
        path="/signin"
        component={asyncComponent(() => import("./containers/Page/signin"))}
      />
      <Route
        path="/auth0loginCallback"
        render={props => {
          Auth0.handleAuthentication(props);
        }}
      />
      <RestrictedRoute
        path="/dashboard"
        component={App}
        isLoggedIn={isLoggedIn}
      />
      <Route
        exact
        path="/404"
        component={asyncComponent(() => import("./containers/Page/404"))}
      />
      <Route
        exact
        path="/505"
        component={asyncComponent(() => import("./containers/Page/505"))}
      />
      <Route
        exact
        path="/signup"
        component={asyncComponent(() => import("./containers/Page/signup"))}
      />
      <Route
        exact
        path="/forgot-password"
        component={asyncComponent(() =>
          import("./containers/Page/forgetpassword")
        )}
      />
      <Route
        exact
        path="/reset-password"
        component={asyncComponent(() =>
          import("./containers/Page/resetpassword")
        )}
      />
      {/* </Transition> */}
    </div>
  </BrowserRouter>
);

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Auth.idToken !== null
  };
}
export default connect(mapStateToProps)(PublicRoutes);
