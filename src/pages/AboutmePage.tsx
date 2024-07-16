import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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

const aboutMeInfo = {
  aboutMe: {
    header: "About me",
    text: "With over a decade in airfreight, I've transitioned to IT, excelling in the Neurotechnology front end team. Proactive and patient, I bring expertise in aviation, government tenders, alongside self-motivation, mathematical prowess, and strategic thinking. My approach fosters a collaborative and enjoyable work environment. Also.. it is fun to be around me!",
  },
  howStarted: {
    header: "How it started",
    text: "I embarked on my frontend developer career after completing a series of intensive training programs at Code Academy, Devbridge Frontend Academy, Kayak Academy, and Kilo Health Academy. These academies provided me with a solid foundation in web development and honed my skills in creating engaging user interfaces. Shortly after, I landed my first job as a frontend developer, ready to apply my knowledge in a real-world setting. And remember, I chose frontend development because, unlike the back end, you can actually see what you're doing—no more 'invisible' bugs!",
  },
  howGoing: {
    header: "How it's going",
    text: "With all the knowledge  I gained studying and communication skills developed during my logistics career, it didn't take long to become a fully fledged team player of the Neurotechnology front end team. My everyday tools are React, Typescript, Figma, GIT, REST APIs and daily communication with my and other team's developers, UI/UX designers and product owners.",
  },
  hobbies: {
    header: "Hobbies",
    text: "LoremCulpa occaecat commodo aliquip elit fugiat quis reprehenderit nostrud eu culpa id tempor commodo aute. Laboris exercitation esse cillum et mollit minim mollit esse sit et Lorem mollit amet ea. Et sunt sunt consequat minim nulla officia adipisicing reprehenderit minim ut anim. Ut sunt tempor exercitation laborum enim et eu esse. Et officia veniam excepteur consectetur ut elit.",
  },
};

const suvalkiUrl =
  "https://www.politico.eu/article/suwalki-gap-russia-war-nato-lithuania-poland-border/";

const AboutMePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
          header={aboutMeInfo.aboutMe.header}
          text={aboutMeInfo.aboutMe.text}
        />
        <Grid item container>
          <Grid item container xs={6}>
            <TextWithHeaderContainer
              fullwith={true}
              header={aboutMeInfo.howStarted.header}
              text={aboutMeInfo.howStarted.text}
            />
            <TextWithHeaderContainer
              fullwith={true}
              header={aboutMeInfo.howGoing.header}
              text={aboutMeInfo.howGoing.text}
            />
          </Grid>
          <Grid item container xs={6}>
            <TextWithHeaderContainer
              fullwith={true}
              header={aboutMeInfo.hobbies.header}
              text={aboutMeInfo.hobbies.text}
            />
          </Grid>
        </Grid>
      </Grid>
      <TextWithHeaderContainer
        header="Move arround my tech stack"
        items={techStackList.map((item) => (
          <DraggableItem logo={item.logo} name={item.name} />
        ))}
        fullwith={true}
      />
    </Grid>
  );
};

export default AboutMePage;
