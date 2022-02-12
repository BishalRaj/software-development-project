import {
  FormControl,
  InputLabel,
  Link,
  Grid,
  Typography,
  TextField,
  Stack,
  Button,
  IconButton,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";


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
    getValues,
    formState: { errors } } = useForm({ mode: "all" });

  const handleRegister = () => {
    console.log(getValues())
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const errorStyles = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '12px'
  }
  const formComponent = (
    <Stack
      spacing={2}
      sx={formWidth}
      component="form"
    >
      <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
        Sign up to Covac
      </Typography>


      <span style={errorStyles}>
        {errors.fname && errors.fname.message}
      </span>

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
            message: 'Please enter a name'
          },
          pattern: {
            value: /([A-Z][a-zA-Z]*)/,
            message: 'Please enter a valid name'
          }

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

      <FormControl sx={{ width: "100%" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          className="filled-adornment-password"
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
          Confirm Password
        </InputLabel>
        <FilledInput
          className="filled-adornment-password"
          type={showPassword ? "text" : "password"}
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
          label="Cpassword"
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

      <pre>
        {JSON.stringify(watch(), null, 2)}

      </pre>

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
