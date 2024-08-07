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
      // justifyContent="center"
      // alignContent="center"
      height="100%"
      // zIndex={1}
      // width="fit-content"
      maxWidth="1440px"
      margin={matches ? "auto" : 0}
    >
      <CustomizedTimeline />
    </Grid>
  );
};

export default AboutMePage;
