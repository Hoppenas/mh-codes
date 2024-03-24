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
    <Box
      overflow="hidden"
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        background: "#0e0e0d",
        color: "#FFF",
      }}
    >
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
