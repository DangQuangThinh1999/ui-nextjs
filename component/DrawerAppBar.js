import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SimpleBar from "./SimpleBar";

import CustomizedButtons from "./CustomizedButtons";
import { Link } from "@mui/material";

const drawerWidth = 260;
const drawerHeight = 64;

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <SimpleBar />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      {/* button right */}
      <Box
        sx={{
          position: "fixed",
          top: 10,
          right: 16,
          zIndex: "tooltip",
          opacity: "initial",
        }}
      >
        <CustomizedButtons value={"Get Update"} variant="contained" />
      </Box>
      {/* button Left */}
      <Box component="nav" sx={{ position: "fixed", top: 0, left: 0 }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
      {/* NAVBAR */}
      <Box
        sx={{
          display: "flex",
          height: 64,
        }}
      >
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            height: drawerHeight,
            backgroundColor: "rgba(255,255,255,0.9)",
            opacity: 1,
            webkitBackdropFilter: "blur(4px)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                position: "fixed",
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* icon */}
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                position: "fixed",
              }}
            >
              <Link href="/" underline="none">
                <Image
                  src="/Avatar.svg"
                  alt="Picture of a triangle"
                  width={40}
                  height={40}
                />
              </Link>
            </Typography>
            {/* ------------------------------- */}
          </Toolbar>
        </AppBar>

        {/* RENDER-BODY */}
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>{/* RENDER-BODY */}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
