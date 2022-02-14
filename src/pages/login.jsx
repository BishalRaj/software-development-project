import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api";
import GoogleLoginComponent from "../components/google/login";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";
const Login = () => {
  const formWidth = {
    width: "50%",
    "@media (max-width: 426px)": {
      width: "80%",
    },
  };
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [open, setOpen] = React.useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const errorStyles = {
    color: "red",
    fontStyle: "italic",
    fontSize: "12px",
  };
  const [responseSuccess, setResponseSuccess] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const handleLogin = async () => {
    const data = getValues();
    await loginApi(data)
      .then((responseData) => {
        let { success, msg } = responseData?.data;
        console.log("====================================");
        console.log(responseData);
        console.log("====================================");
        setResponseSuccess(success);
        setResponseMessage(msg);
        setOpen(true);

        success &&
          setTimeout(() => {
            navigate("/login");
          }, 2000);
      })
      .catch((error) => {
        setResponseSuccess(false);
        setResponseMessage("Network problem, please try again later");
        setOpen(true);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formComponent = (
    <Stack spacing={2} sx={formWidth} component="form">
      <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
        Sign in to CovVac
      </Typography>

      <GoogleLoginComponent />

      <Divider flexItem className="py-1" sx={{ color: "#808080" }}>
        OR
      </Divider>
      <span style={errorStyles}>{errors.email && errors.email.message}</span>

      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        type="email"
        sx={{ width: "100%" }}
        {...register("email", {
          required: {
            value: true,
            message: "Please enter your email",
          },
        })}
      />
      <span style={errorStyles}>
        {errors.password && errors.password.message}
      </span>

      <FormControl sx={{ width: "100%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: {
              value: true,
              message: "Please enter your password",
            },
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Box container>
        <Grid container>
          <Grid>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ color: `${color.default} !important` }}
                  />
                }
                label={<Typography variant="caption">Remember me</Typography>}
              ></FormControlLabel>
            </FormGroup>
          </Grid>
          <Grid>
            <Typography
              variant="caption"
              align="right"
              className="h-100 d-flex align-items-center justify-content-end"
            >
              <Link
                href="/register"
                underline="none"
                color={color.default}
                fontWeight="bold"
              >
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Button
        variant="contained"
        sx={{ textTransform: "none", backgroundColor: color.default }}
        className="py-2"
        type="button"
        disabled={!isValid}
        onClick={handleLogin}
      >
        <Typography>Login</Typography>
      </Button>

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
    </Stack>
  );

  const redirectComponent = {
    text: "Don't have an account?",
    redirectText: "Get started",
    link: "/register",
  };
  return (
    <AuthLayout
      formComponent={formComponent}
      redirectComponent={redirectComponent}
      authCardText={"Hi, Welcome back"}
      authCardImg={image.login}
    />
  );
};

export default Login;
