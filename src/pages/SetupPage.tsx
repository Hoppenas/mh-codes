import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";

const SetupPage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100%"
      zIndex={1}
    >
      <Typography>Setup</Typography>
    </Grid>
  );
};

export default SetupPage;
