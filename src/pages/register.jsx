import {
  FormControl,
  InputLabel,
  Link,
  Grid,
  Typography,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../layout/authLayout";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { color, image } from "../static";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const Register = () => {
  const formWidth = {
    width: "50%",
    "@media (max-width: 426px)": {
      width: "80%",
    },
  };
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    alert(`email: ${data.email}  pwd: ${data.password} `);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formComponent = (
    <Stack
      spacing={2}
      sx={formWidth}
      component="form"
      onSubmit={handleSubmit(handleLogin)}
    >
      <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
        Sign up to CVac
      </Typography>

      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        type="email"
        sx={{ width: "100%" }}
        {...register("email", { required: true })}
      />


      


      

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
          Re-Password
        </InputLabel>
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

      <Box container>
        <Grid container>
          <Grid md={6}>
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
          <Grid md={6}>
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
        type="submit"
      >
        <Typography>Register</Typography>
      </Button>
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

export default Register;
