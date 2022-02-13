import {
  Button,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { registerApi } from "../api";
import GoogleLoginComponent from "../components/google/login";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";

const Register = () => {
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

  const handleRegister = async () => {
    const data = getValues();
    const response = await registerApi(data);
    response && console.log(response);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const errorStyles = {
    color: "red",
    fontStyle: "italic",
    fontSize: "12px",
  };
  const formComponent = (
    <Stack spacing={2} sx={formWidth} component="form">
      <GoogleLoginComponent />

      <Divider flexItem className="py-1" sx={{ color: "#808080" }}>
        OR
      </Divider>

      <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
        Sign up to CoVac
      </Typography>

      <span style={errorStyles}>{errors.fname && errors.fname.message}</span>
      <TextField
        className="filled-basic"
        label="First name"
        variant="filled"
        type="name"
        name="fname"
        sx={{ width: "100%" }}
        {...register("fname", {
          required: {
            value: true,
            message: "Please enter your first name *",
          },
          pattern: {
            value: /([A-Z][a-zA-Z]*)/,
            message: "Please enter a valid name *",
          },
        })}
      />

      <span style={errorStyles}>{errors.lname && errors.lname.message}</span>
      <TextField
        className="filled-basic"
        label="Last name"
        variant="filled"
        type="name"
        sx={{ width: "100%" }}
        {...register("lname", {
          required: {
            value: true,
            message: "Please enter your last name *",
          },
          pattern: {
            value: /([A-Z][a-zA-Z]*)/,
            message: "Please enter a valid name *",
          },
        })}
      />

      <span style={errorStyles}>{errors.email && errors.email.message}</span>
      <TextField
        className="filled-basic"
        label="Email"
        variant="filled"
        type="email"
        sx={{ width: "100%" }}
        {...register("email", {
          required: {
            value: true,
            message: "Please enter your email *",
          },
          pattern: {
            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: "Please enter a valid email",
          },
        })}
      />
      {/* 
      <TextField
        className="filled-basic"
        label="Phone number"
        variant="filled"
        type="number"
        sx={{ width: "100%" }}
        {...register("phonenumber", { required: true })}
      /> */}

      <FormControl sx={{ width: "100%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-phonenumber">
          Phone number
        </InputLabel>
        <FilledInput
          id="filled-adornment-phonenumber"
          type="number"
          {...register("phonenumber", { required: true })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="start" style={{ fontSize: "14px" }}>
                {" "}
                +44{" "}
              </IconButton>
            </InputAdornment>
          }
          label="Phone number"
        />
      </FormControl>

      <FormControl sx={{ width: "100%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password", { required: true })}
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

      <FormControl sx={{ width: "100%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">
          Confirm password
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "Confirm password"}
          {...register("cpassword", { required: true })}
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
          label="Confirm password"
        />
      </FormControl>

      <Box container>
        <Grid container>
          <Grid>
            <Typography
              variant="caption"
              align="left"
              className="h-100 d-flex align-items-center justify-content-start"
            >
              <Link
                href="/login"
                underline="none"
                color={color.default}
                fontWeight="bold"
              >
                Already have an account?
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
        onClick={handleRegister}
      >
        <Typography>Register</Typography>
      </Button>
    </Stack>
  );

  const redirectComponent = {
    text: "Already have an account?",
    redirectText: "Sign in",
    link: "/login",
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

export default Register;
