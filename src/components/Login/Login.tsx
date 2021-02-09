import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../api/firebase";

import { StateContext } from "../../context/StateContext";

import logo from "../../images/facebook-logo.png";
import "./Login.css";

const Login = () => {
  const { setUser } = React.useContext(StateContext) as ContextType;
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
