import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import { Spinner } from "@chakra-ui/core";

function AuthWrapper({ children }: JSX.ElementChildrenAttribute ) {
  const {
    isLoading,
    error,
    isAuthenticated
  } = useAuth0();

  if (isLoading) {
    return (
      <>
        <Spinner size="lg"/>
        <br/>
        Loading...
      </>
    )
  }
  if (error) {
    return <>Oops... {error.message}</>;
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }
  else {
    return (
      <div>
        <br/>
        <Spinner size="lg"/>
        <br/>
        <LoginButton/>
      </div>
    )
  }
}

export default AuthWrapper;