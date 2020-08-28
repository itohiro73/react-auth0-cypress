import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserHistory } from 'history';
import Home from "./components/Home";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
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
            <Switch>
              <ProtectedRoute exact path="/" component={Home}/>
              <ProtectedRoute path="/menu1" component={Menu1}/>
              <ProtectedRoute path="/menu2" component={Menu2}/>
              <ProtectedRoute path="/menu3" component={Menu3}/>
              <ProtectedRoute path="/profile" component={Profile}/>
            </Switch>
          </AuthWrapper>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
