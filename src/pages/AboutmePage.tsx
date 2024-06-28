import { Grid, Typography, useMediaQuery, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import mhphoto from "../images/MHphoto.jpg";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";
import TextWithHeaderContainer from "../components/TextWithHeaderContainer/TextWithHeaderContainer";

const testText = {
  header: "Test 1",
  text: "For the last 13 years I have been working in the aviation business. But during the pandemic lockdown I have decided to make a career change and focus on the IT business. To kickstart my IT career, I have successfully finished the Code Academy , Devbridge, KAYAK , Kilo Health front end academies. With all the knowledge I gained studying and communication skills developed during my logistics career, it didn't take long to become a fully fledged team player of the Neurotechnology front end team.",
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
      {/* <Box
        bgcolor="#FFF"
        height="30vh"
        width="100%"
        margin={2}
        marginTop="200px"
      >
        <Avatar
          alt="Martynas Hoppenas"
          src={mhphoto}
          variant="rounded"
          sx={{ width: 200, height: 300 }}
        />
      </Box> */}
      <Box
        padding={2}
        // bgcolor="rgba(135, 145, 154, 0.4)"
        display="flex"
        flexDirection="row"
        gap={3}
      >
        <Grid container>
          <TextWithHeaderContainer
            fullwith={false}
            header={testText.header}
            text={testText.text}
          />
          <Grid container direction="row">
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
      </Box>
    </Grid>
  );
};

export default AboutMePage;
