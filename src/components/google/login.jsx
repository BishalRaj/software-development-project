import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleLoginApi } from "../../api";



const Login = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [responseSuccess, setResponseSuccess] = useState();
  const [responseMessage, setResponseMessage] = useState();

  const handleGoogleLogin = async (googleData) => {
    await googleLoginApi(googleData.profileObj).then((googleLoginResponseFromBackend) => {
      let { success, msg } = googleLoginResponseFromBackend?.data

      setResponseMessage(msg)
      setResponseSuccess(success)
      setOpen(true)

      success && setTimeout(() => {
        navigate('/profile')
      }, 2000);

    }).catch((error) => {
      setResponseSuccess(false);
      setResponseMessage("Network problem, please try again later");
      setOpen(true);
    });
  };

  const handleGoogleLoginFailure = (googleFailureData) => {
    setResponseSuccess(false);
    setResponseMessage("Couldnot connect to google server, please try again later");
    setOpen(true);
  };

  return (
    <>  <GoogleLogin
      clientId="599900087974-l4kfagg1uci41noaa50vhs8h1mtg7884.apps.googleusercontent.com"
      // buttonText="Login with your google id"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleLoginFailure}
    />

      {responseSuccess ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {responseMessage}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {responseMessage}
          </Alert>
        </Snackbar>

      )}
    </>

  );


};

export default Login;
