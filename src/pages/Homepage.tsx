import { Grid, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import MButton from "../components/MButton/MButton";
import FollowMeBar from "../components/FollowMeBar/FollowMeBar";

const HomePage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      width="100%"
      justifyContent="center"
      alignContent="center"
      height="100%"
    >
      <Grid
        item
        container
        direction="column"
        width="fit-content"
        alignItems="center"
        maxWidth="80%"
      >
        <AnimatedText text="MARTYNAS" />
        <AnimatedText text="FRONTEND ENGINEER" isSubText={true} />
        <MButton
          name="Contact with me"
          handleClick={() => navigate("contacts")}
        />
        <FollowMeBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
