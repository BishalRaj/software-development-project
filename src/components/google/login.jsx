import React from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const handleGoogleLogin = (googleData) => {
    console.log(googleData);
  };

  const handleGoogleLoginFailure = (googleFailureData) => {
    console.log(googleFailureData);
  };

  return (
    <GoogleLogin
      clientId="599900087974-l4kfagg1uci41noaa50vhs8h1mtg7884.apps.googleusercontent.com"
      // buttonText="Login with your google id"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleLoginFailure}
    />
  );
};

export default Login;
