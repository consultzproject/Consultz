import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import MovingIcon from "@mui/icons-material/Moving";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import * as Mui from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <MovingIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  {
    title: "Initial Client Engagement",
    content:
      "The consulting company initiates contact with the client or responds to a client's request for consulting services.",
  },
  {
    title: "Talent Requirement Analysis ",
    content:
      "The requirement will be subjected to a thorough analysis. Our expert team will enable us to fetch from the appropriate talent pool.",
  },
  {
    title: "Matching Our Resources With Your Requirements",
    content:
      "With Sayal’s robust database we would initiate the aligning of client’s specifications.",
  },
  {
    title: "Resource Deployment",
    content:
      "Making sure that the most apt resources are deployed at the earliest.",
  },
];

export const Process = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      sx={{ width: "100%", padding: "80px 120px 150px 120px" }}
      spacing={4}
    >
      <Stepper
        alternativeLabel
        activeStep={3}
        connector={<ColorlibConnector />}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Mui.Stack sx={{ alignItems: "start" }}>
                <Mui.Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "urbanist",
                    textAlign: "start",
                  }}
                >
                  {label.title}
                </Mui.Typography>
                <Mui.Typography
                  sx={{ fontSize: "15px", textAlign: "start", color: "grey" }}
                >
                  {label.content}
                </Mui.Typography>
              </Mui.Stack>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
