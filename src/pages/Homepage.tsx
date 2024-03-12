import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../contstants/styleConstants";

const HomePage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid container width="100%" justifyContent="center" paddingTop="20%">
      <Grid
        item
        container
        direction="column"
        width="fit-content"
        alignItems="center"
      >
        <Typography variant="h1">MARTYNAS</Typography>
        <Typography variant="h6" marginBottom={1}>
          FRONTEND ENGINEER
        </Typography>
        <Button variant="contained" fullWidth color="secondary">
          Contact with me
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;
