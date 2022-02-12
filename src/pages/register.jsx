import {
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import GoogleLoginComponent from "../components/google/login";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";
import { registerApi } from "../api";

const Register = () => {
  const formWidth = {
    width: "50%",
    "@media (max-width: 426px)": {
      width: "80%",
    },
  };
  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleRegister = (data) => {
    registerApi(data);
  };

  const errorStyles = {
    color: "red",
    fontStyle: "italic",
    fontSize: "12px",
  };
  const formComponent = (
    <Stack
      spacing={2}
      sx={formWidth}
      component="form"
      onSubmit={handleSubmit(handleRegister)}
    >
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
            message: "Please enter a name",
          },
          pattern: {
            value: /([A-Z][a-zA-Z]*)/,
            message: "Please enter a valid name",
          },
        })}
      />

      <TextField
        className="filled-basic"
        label="Last name"
        variant="filled"
        type="name"
        sx={{ width: "100%" }}
        {...register("lname", { required: true })}
      />

      <TextField
        className="filled-basic"
        label="Email"
        variant="filled"
        type="email"
        sx={{ width: "100%" }}
        {...register("email", { required: true })}
      />

      <TextField
        className="filled-basic"
        label="Phone number"
        variant="filled"
        type="number"
        sx={{ width: "100%" }}
        {...register("phonenumber", { required: true })}
      />

      <TextField
        className="filled-basic"
        label="Password"
        variant="filled"
        type="password"
        sx={{ width: "100%" }}
        {...register("password", { required: true })}
      />

      <TextField
        className="filled-basic"
        label="Confirm Password"
        variant="filled"
        type="password"
        sx={{ width: "100%" }}
        {...register("cpassword", { required: true })}
      />

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

      <pre>{JSON.stringify(watch(), null, 2)}</pre>

      <Button
        variant="contained"
        sx={{ textTransform: "none", backgroundColor: color.default }}
        className="py-2"
        type="button"
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
