import { useNavigate } from "react-router-dom";
import * as React from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { name: "Apie mane", route: "/about" },
  { name: "Paslaugos", route: "/services" },
  { name: "Portfolio", route: "/portfolio" },
  { name: "Kontaktai", route: "/contacts" },
];

const DrawerAppBar = ({ window }: Props) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        color: "#FFF",
        background: "#0e0e0d",
        height: "100%",
      }}
    >
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.route)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={<Typography variant="h6">{item.name}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          color: "#FFF",
          background: "#0e0e0d",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                width: "100%",
              },
            }}
          >
            <Grid container justifyContent="end" gap={1}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => navigate(item.route)}
                  size="medium"
                  style={{ letterSpacing: 3 }}
                >
                  {item.name}
                </Button>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default DrawerAppBar;
