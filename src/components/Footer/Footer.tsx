import { FC } from "react";
import { Box, Link, Typography } from "@mui/material";

const getCurrentYear = () => new Date().getFullYear();

const Footer: FC = () => (
  <Box
    width="100%"
    component="footer"
    marginTop="auto"
    position="relative"
    paddingBottom={2}
  >
    <Typography variant="subtitle2" align="center">
      {"© "}
      <Link color="inherit" href="https://www.martynas.codes/">
        Martynas Hoppenas
      </Link>{" "}
      {getCurrentYear()}
    </Typography>
  </Box>
);

export default Footer;
