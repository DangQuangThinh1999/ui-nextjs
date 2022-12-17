import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ButtonChildren from "./Button/ButtonChildren";

const textItem = {
  fontSize: "0.9rem",
  lineHeight: 1,
};

export default function ListItemBar({ navbars }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box color={"rgb(99, 115, 129)"}>
      {/* topic */}

      <Typography
        variant="h2"
        component="h3"
        sx={{
          fontSize: "0.7rem",
          fontWeight: 700,
          color: "rgb(99, 115, 129)",
          padding: "24px 16px 8px 16px",
        }}
      >
        GETTING STARTED
      </Typography>
      <ListItemButton>
        <ListItemText
          primary={
            <Typography variant="h4" component="h3" style={textItem}>
              introduction
            </Typography>
          }
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary={
            <Typography variant="h4" component="h3" style={textItem}>
              Quick Start
            </Typography>
          }
        />
      </ListItemButton>
      {/* Button Click open and close same is dropdown */}
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={
            <Typography variant="h4" component="h3" style={textItem}>
              Settings
            </Typography>
          }
        />
        {open ? (
          <ExpandMore sx={{ fontSize: "18px" }} />
        ) : (
          <ArrowForwardIosIcon sx={{ fontSize: "11px" }} />
        )}
      </ListItemButton>
      {/* ------------------------MAP------------------------- */}

      <Collapse in={open} timeout="auto" unmountOnExit orientation="vertical">
        <List component="div" disablePadding>
          {/* button icon */}
          <ButtonChildren />
        </List>
      </Collapse>
    </Box>
  );
}
