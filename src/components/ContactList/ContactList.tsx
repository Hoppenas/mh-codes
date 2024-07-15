import { Box, Grid, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = {
  linkedin: "martynas-hoppenas",
  github: "hoppenas",
  email: "martynas.hoppenas@gmail.com",
  tel: "+370 607 16666",
};

const ContactList = () => {
  return (
    <Box width="fit-content" marginTop={2}>
      <Grid container direction="row" alignItems="center">
        <IconButton
          color="inherit"
          sx={{
            padding: 0,
            cursor: "pointer",
          }}
          href="https://github.com/hoppenas"
          target="_blank"
        >
          <GitHubIcon />
          <Typography variant="h6" marginLeft={1}>
            {contacts.github}
          </Typography>
        </IconButton>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <IconButton
          color="inherit"
          sx={{ padding: 0, cursor: "pointer" }}
          href="https://www.linkedin.com/in/martynas-hoppenas"
          target="_blank"
        >
          <LinkedInIcon />
          <Typography variant="h6" marginLeft={1}>
            {contacts.linkedin}
          </Typography>
        </IconButton>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <AlternateEmailIcon />
        <Typography variant="h6" marginLeft={1}>
          {contacts.email}
        </Typography>
      </Grid>

      <Grid container direction="row" alignItems="center" marginBottom={2}>
        <PhoneIcon />
        <Typography variant="h6" marginLeft={1}>
          {contacts.tel}
        </Typography>
      </Grid>
    </Box>
  );
};

export default ContactList;
