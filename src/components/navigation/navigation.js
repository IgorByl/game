import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./navigation.css";
import LoadingMessage from "./../loadingMessage/index";

const LandingPage = lazy(() =>
  import("./../../components/landingPage/landingPage")
);

const BattlePage = lazy(() =>
  import("./../../containers/battlePage/battlePage")
);

const Registration = lazy(() =>
  import("./../../containers/registrationPage/registrationPage")
);

export default class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/battle' component={BattlePage} />
            <Route exact path='/registration' component={Registration} />
            <Route
              render={() => (
                <Fragment>
                  <div className="navigation_fragment_notFoundPage">
                    <h1>Page not found</h1>
                    <Link to='/'>Do you want to play?</Link>
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
