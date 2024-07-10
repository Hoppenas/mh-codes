import { Grid, Typography, useMediaQuery, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import mhphoto from "../images/MHphoto.jpg";
import TextWithHeaderContainer from "../components/TextWithHeaderContainer/TextWithHeaderContainer";
import DraggableItem from "../components/DraggableItem/DraggableItem";
import jsLogo from "../images/logo/javascript.svg";
import muiLogo from "../images/logo/mui.svg";
import reactLogo from "../images/logo/react.svg";
import sassLogo from "../images/logo/sass.svg";
import tsLogo from "../images/logo/ts.svg";
import zustandLogo from "../images/logo/zustand.svg";
import ContactList from "../components/ContactList/ContactList";

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
    <Grid container zIndex={1} maxWidth="1024px" margin="auto">
      <Grid container>
        <Grid item container direction="row" xs={12} marginX={1} marginTop={1}>
          <Grid item container xs={4}>
            <img src={mhphoto} width="250px" alt="MH" />
          </Grid>
          <Grid item direction="column" xs={8}>
            <Typography width="fit-content" variant="h3">
              MARTYNAS HOPPENAS
            </Typography>
            <Typography width="fit-content" variant="h5">
              Frontend developer
            </Typography>
            <ContactList />
          </Grid>
        </Grid>
        <TextWithHeaderContainer
          fullwith={false}
          header={testText.header}
          text={testText.text}
        />
        <Grid item container>
          <Grid item container xs={6}>
            <TextWithHeaderContainer
              fullwith={true}
              header="test2"
              text={testText.text}
              // items={<img src={mhphoto} width="200px" alt="MH" />}
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
      {/* <Grid item container width="100%"> */}
      <TextWithHeaderContainer
        header="Move arround my tech stack"
        items={techStackList.map((item) => (
          <DraggableItem logo={item.logo} name={item.name} />
        ))}
        fullwith={true}
      />
      {/* </Grid> */}
    </Grid>
  );
};

export default AboutMePage;
