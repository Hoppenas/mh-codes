import { Outlet } from "react-router-dom";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import { Box, useMediaQuery } from "@mui/material";
import { minWidth } from "../../contstants/styleConstants";
import Footer from "../Footer/Footer";

interface Props {}

const Layout = ({}: Props) => {
  const matches = useMediaQuery(`(min-width:${minWidth})`);
  return (
    <Box
      overflow={matches ? "auto" : "scroll"}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#0e0e0d",
        color: "#FFF",
      }}
    >
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
