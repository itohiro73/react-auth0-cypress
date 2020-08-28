import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserHistory } from 'history';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AuthWrapper from "./components/AuthWrapper";
import ProtectedRoute from "./components/ProtectedRoute";
import { AppState } from "@auth0/auth0-react/dist/auth0-provider";

export const history = createBrowserHistory();

const onRedirectCallback = (appState: AppState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ''}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Router history={history}>
          <AuthWrapper>
            <header>
              <Navbar/>
            </header>
            <Switch>
              <ProtectedRoute exact path="/" component={Home}/>
              <ProtectedRoute path="/profile" component={Profile}/>
            </Switch>
          </AuthWrapper>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
