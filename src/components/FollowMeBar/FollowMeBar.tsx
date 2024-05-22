import { FC } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { linkedinLink, githubLink } from "../../constants/links";

const FollowMeBar: FC = () => {
  return (
    <Grid
      container
      position="relative"
      justifyContent="center"
      alignContent="center"
      direction="row-reverse"
      gap={1}
      margin={1}
    >
      {/* <IconButton
        color="inherit"
        sx={{ padding: 0, cursor: "pointer" }}
        href={githubLink}
        target="_blank"
      > */}
      <GitHubIcon />
      {/* </IconButton> */}
      <IconButton
        color="inherit"
        sx={{ padding: 0, cursor: "pointer" }}
        href={linkedinLink}
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
      <Grid
        item
        border="1px solid #FFF"
        height="1px"
        width="70px"
        margin="auto 20px"
      />
      <Grid item marginTop={3} margin={"auto 0"}>
        <Typography>Follow me</Typography>
      </Grid>
    </Grid>
  );
};

export default FollowMeBar;
