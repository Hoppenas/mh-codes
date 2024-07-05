import { Grid, Typography, useMediaQuery, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import mhphoto from "../images/MHphoto.jpg";
import TextWithHeaderContainer from "../components/TextWithHeaderContainer/TextWithHeaderContainer";
import Draggable from "react-draggable";
import DraggableItem from "../components/DraggableItem/DraggableItem";
import jsLogo from "../images/logo/javascript.svg";
import muiLogo from "../images/logo/mui.svg";
import reactLogo from "../images/logo/react.svg";
import sassLogo from "../images/logo/sass.svg";
import tsLogo from "../images/logo/ts.svg";
import zustandLogo from "../images/logo/zustand.svg";

// React/Redux/Styled Components/Typescript/MUI/Zustand/

const techStackList = [
  {
    name: "Javascript",
    logo: jsLogo,
  },
  {
    name: "MUI",
    logo: muiLogo,
  },
  {
    name: "React",
    logo: reactLogo,
  },
  {
    name: "Sass",
    logo: sassLogo,
  },
  {
    name: "Typescript",
    logo: tsLogo,
  },
  {
    name: "Zustand",
    logo: zustandLogo,
  },
];

const testText = {
  header: "Test 1",
  // text: "For the last 13 years I have been working in the aviation business. But during the pandemic lockdown I have decided to make a career change and focus on the IT business. To kickstart my IT career, I have successfully finished the Code Academy , Devbridge, KAYAK , Kilo Health front end academies. With all the knowledge I gained studying and communication skills developed during my logistics career, it didn't take long to become a fully fledged team player of the Neurotechnology front end team.",
  text: "LoremCulpa occaecat commodo aliquip elit fugiat quis reprehenderit nostrud eu culpa id tempor commodo aute. Laboris exercitation esse cillum et mollit minim mollit esse sit et Lorem mollit amet ea. Et sunt sunt consequat minim nulla officia adipisicing reprehenderit minim ut anim. Ut sunt tempor exercitation laborum enim et eu esse. Et officia veniam excepteur consectetur ut elit.",
};

const AboutMePage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100%"
      zIndex={1}
      maxWidth="60%"
      margin="auto"
    >
      <Grid container>
        <TextWithHeaderContainer
          fullwith={false}
          header={testText.header}
          text={testText.text}
        />
        <Grid item container>
          <Grid item container xs={6}>
            <TextWithHeaderContainer
              fullwith={true}
              header={testText.header}
              text={testText.text}
            />
            <TextWithHeaderContainer
              fullwith={true}
              header={testText.header}
              text={testText.text}
            />
          </Grid>
          <Grid item container xs={6}>
            <TextWithHeaderContainer
              fullwith={true}
              header={testText.header}
              text={testText.text}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <TextWithHeaderContainer
          header="Move arround my tech stack"
          text={techStackList.map((item) => (
            <DraggableItem logo={item.logo} name={item.name} />
          ))}
          fullwith={true}
        />
      </Grid>
    </Grid>
  );
};

export default AboutMePage;
