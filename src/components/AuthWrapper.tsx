import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./Loading";
import Navbar from "./Navbar";

function AuthWrapper({ children }: JSX.ElementChildrenAttribute ) {
  const {
    isLoading,
    error,
    isAuthenticated
  } = useAuth0();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  if (error) {
    return <>Oops... {error.message}</>;
  }
  if (isAuthenticated) {
    return (
      <>
        <header>
          <Navbar/>
        </header>
        {children}
      </>
    )
  }
  else {
    return (
      <>
        {children}
      </>
    )
  }
}

export default AuthWrapper;