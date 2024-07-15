import { Grid, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import ContactList from "../components/ContactList/ContactList";

const ContactPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100%"
      zIndex={1}
    >
      <ContactList />
    </Grid>
  );
};

export default ContactPage;
