import { Grid, Typography, useMediaQuery, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import mhphoto from "../images/MHphoto.jpg";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";

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
      <Box
        padding={2}
        bgcolor="rgba(135, 145, 154, 0.4)"
        display="flex"
        flexDirection="row"
        gap={3}
      >
        {/* <Avatar
          alt="Martynas Hoppenas"
          src={mhphoto}
          variant="rounded"
          sx={{ width: 200, height: 300 }}
        /> */}
        <Grid container>
          <Grid xs={6} border={1}>
            <Typography>ABOUT ME</Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              Please accept this letter as an expression of my interest in the
              Front-end Engineer position. For the last 13 years I have been
              working in the aviation business. But during the pandemic lockdown
              I have decided to make a career change and focus on the IT
              business. To kickstart my IT career, I have successfully finished
              the Code Academy , Devbridge, KAYAK , Kilo Health front end
              academies. With all the knowledge I gained studying and
              communication skills developed during my logistics career, it
              didn't take long to become a fully fledged team player of the
              Neurotechnology front end team.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* <Typography>
        My everyday tools are React, Typescript, Figma, GIT, REST APIs and daily
        communication with my and other team's developers, UI/UX designers and
        product owners. I know it's only beginning of road, but considering the
        fact I managed to explain my grandmother how turn on front camera during
        video call, it will not take long to become senior developer. Speaking
        about my work experience, as you can notice, once I find suitable work
        team-mates, I tend to stay long and do not look for any replacements. I
        truly believe that nowadays it is a true value. During my career in
        aviation, I have learned to listen to the client's needs, to look at the
        problem in different angles, to see the big picture and integrate fast.
        And mostly I have learned, that a sky is the limit and impossible is
        just an opinion. On a less formal note, I know that developer should
        work with make it happen attitude. So in the light of this I am pleased
        to introduce myself as a father of two beautiful daughters. Can't say
        that I am also proud of the fact that I am constantly forced to sing
        songs from Disney's Frozen, Frozen 2, Mermaid and unfortunately the list
        goes on... Considering the fact, that I am a terrible singer and don't
        know all the lyrics, yes, I know how to make it happen . I am sure my
        motivation and personal qualities will allow me to integrate quickly in
        to the LastPass family. Please take a moment to review my attached
        resume. I would greatly appreciate the opportunity to speak with you
        regarding my application. As my daughter would say let it go... Let it
        go... Do you want to build a snowman?* I would surely do! *Lyrics from
        movie Frozen.
      </Typography> */}
    </Grid>
  );
};

export default AboutMePage;
