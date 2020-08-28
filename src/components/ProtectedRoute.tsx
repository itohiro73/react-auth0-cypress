import React from "react";
import * as H from "history";
import { RouteChildrenProps, RouteComponentProps } from "react-router";
import { WithAuthenticationRequiredOptions } from "@auth0/auth0-react/dist/with-authentication-required";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

interface ThisRouteComponentProps {
  component: React.ComponentType
}

interface ThisRouteProps {
  location?: H.Location;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

type ProtectedRouteProps = ThisRouteComponentProps & ThisRouteProps & WithAuthenticationRequiredOptions

const ProtectedRoute = <P extends object>(props: ProtectedRouteProps) => {
  const component = props.component
  const {returnTo, onRedirecting = () => <Loading />, loginOptions} = props
  const options = {returnTo, onRedirecting, loginOptions}
  const {location, render, children, path, exact, sensitive, strict} = props
  const args = {location, render, children, path, exact, sensitive, strict}

  return <Route component={withAuthenticationRequired(component, options)} {...args}/>
}

export default ProtectedRoute;