import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "grommet";
import { Login, Logout } from "grommet-icons";

interface Props {}

export const SignInButton = (props: Props) => {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    getIdTokenClaims,
  } = useAuth0();

  const loginButton = (
    <Button
      size="medium"
      label="Sign in"
      primary
      icon={<Login />}
      onClick={() =>
        loginWithRedirect().then(() => {
          getIdTokenClaims().then((id) => {
              localStorage.setItem("id_token", id.__raw)
          });
        })
      }
    />
  );

  return !isAuthenticated ? loginButton : <></>;
};

export const SignOutButton = (props: Props) => {
  const { logout, isAuthenticated } = useAuth0();

  const logoutButton = (
    <Button
      size="medium"
      secondary
      onClick={() => logout()}
      icon={<Logout />}
      label="Sign out"
    />
  );

  return isAuthenticated ? logoutButton : <></>;
};

export default { SignInButton, SignOutButton };
