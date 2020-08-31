import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";

const user = {
  email: "test@example.com",
  name: "Test User",
  picture: "http://placekitten.com/350/250/"
}

jest.mock("@auth0/auth0-react");

beforeEach(() => {
  // @ts-ignore
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user,
    logout: jest.fn(),
    loginWithRedirect: jest.fn()
  });
})

test('renders Profile component', () => {
  const { getByText } = render(<Profile />);
  const profileElement = getByText("Profile");
  expect(profileElement).toBeInTheDocument();
});
