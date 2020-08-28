import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";

function AuthWrapper({ children }: JSX.ElementChildrenAttribute ) {
  const {
    isLoading,
    error,
    isAuthenticated
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }
  else {
    return (
      <div>
        <h1>Login</h1>
        <LoginButton/>
      </div>
    )
  }
}

export default AuthWrapper;