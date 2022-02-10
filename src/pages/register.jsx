import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Personal from "../components/auth-multistep/personal";
import Resume from "../components/auth-multistep/resume";
import Skills from "../components/auth-multistep/skills";
import Social from "../components/auth-multistep/social";
import AuthLayout from "../layout/authLayout";
import { color, image } from "../static";

const Register = () => {
  const [counter, setcounter] = useState(1);
  const [skill, setskill] = useState([]);
  const [resume, setresume] = useState([]);
  const [data, setdata] = useState([]);
  const handleSkill = (data) => {
    setskill((x) => [...x, data]);
  };
  const handleResume = (data) => {
    setresume((x) => [...x, data]);
  };
  const handleRemoveSkill = (x) => {
    let filteredData = skill.filter((item) => item.id !== x);
    setskill(filteredData);
  };
  const handleRemoveResume = (x) => {
    let filteredData = resume.filter((item) => item.id !== x);
    setresume(filteredData);
  };
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("====================================");
    console.log({ skill, resume, data });
    console.log("====================================");
  };
  const registerComponents = [
    {
      text: "Your Personal Details",
      item: <Personal handleChange={handleChange} data={data} />,
    },
    {
      text: "Academic / Work Details",
      item: (
        <Resume
          data={resume}
          handleResume={handleResume}
          handleRemoveResume={handleRemoveResume}
        />
      ),
    },
    {
      text: "Mention Your Skills",
      item: (
        <Skills
          handleSkill={handleSkill}
          data={skill}
          handleRemoveSkill={handleRemoveSkill}
        />
      ),
    },
    {
      text: "Social Details",
      item: (
        <Social
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
        />
      ),
    },
  ];
  counter < 1 && setcounter(1);
  counter > registerComponents.length && setcounter(registerComponents.length);
  const centerItems = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const circularArrow = {
    height: 50,
    width: 50,
    borderRadius: "100%",
    backgroundColor: color.default,
    color: "white",
    ...centerItems,
    "&:hover": {
      backgroundColor: color.hoverDefault,
    },
  };

  const returnComponent = (
    <>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          // backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "10%",
            ...centerItems,
          }}
        >
          <IconButton
            sx={{
              ...circularArrow,
            }}
            className="shadow-lg"
            onClick={() => setcounter(counter - 1)}
            hidden={counter === 1 ? true : false}
          >
            <ArrowBackIosNewIcon color="white" />
          </IconButton>
        </Box>

        <Box
          // component="form"
          sx={{
            height: "100%",
            width: "80%",
            // backgroundColor: "red",
            ...centerItems,
          }}
        >
          <Stack sx={{ width: "60%", height: "100%" }}>
            {registerComponents.map(
              (component, key) =>
                counter === key + 1 && (
                  <>
                    <Typography
                      variant="h5"
                      sx={{ height: "20% !important", ...centerItems }}
                    >
                      {component.text}
                    </Typography>

                    <Box sx={{ height: "80% !important", ...centerItems }}>
                      {component.item}
                    </Box>
                  </>
                )
            )}
          </Stack>
        </Box>

        <Box sx={{ width: "10%", ...centerItems }}>
          <IconButton
            sx={{
              ...circularArrow,
            }}
            className="shadow-lg"
            onClick={() => setcounter(counter + 1)}
            hidden={registerComponents.length === counter ? true : false}
          >
            <ArrowForwardIosIcon color="white" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
  const redirectComponent = {
    text: "Already have an account?",
    redirectText: "Login",
    link: "/",
  };
  return (
    <>
      <AuthLayout
        formComponent={returnComponent}
        authCardText={"Manage your portfolio more effectively"}
        authCardImg={image.register}
        redirectComponent={redirectComponent}
      />
    </>
  );
};

export default Register;
