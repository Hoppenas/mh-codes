import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../contstants/styleConstants";

const AboutMePage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      direction={matches ? "row" : "column-reverse"}
      height={matches ? "97vh" : "auto"}
      padding="65px 10px 10px"
    >
      <Typography variant="h6">About me</Typography>
    </Grid>
  );
};

export default AboutMePage;
