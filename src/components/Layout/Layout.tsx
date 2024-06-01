import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import { Box, useMediaQuery } from "@mui/material";
import { minWidth } from "../../constants/styleConstants";
import Footer from "../Footer/Footer";
import background from "../../images/background.jpg";
import "./layout.scss";

interface Props {}

const Layout = ({}: Props) => {
  const matches = useMediaQuery(`(min-width:${minWidth})`);
  return (
    <Box height="100vh" display="flex" sx={{ flexDirection: "column" }}>
      <DrawerAppBar />
      <Box
        overflow="hidden"
        position="relative"
        height="100%"
        bgcolor="#0e0e0"
        color="#FFF"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
        <Box
          overflow="scroll"
          height="100%"
          flexDirection="column"
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
