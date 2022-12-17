import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Typography } from "@mui/material";

const ColorButton = styled(Button)(() => ({
  textAlign: "center",
  backgroundColor: "rgb(255, 48, 48)",
  borderRadius: "8px",

  textTransform: "capitalize",

  fontSize: "0.9375rem",
  lineHeight: 1.75,
  padding: "6px 16px",
  width: "32",

  "&:hover": {
    backgroundColor: " rgb(183, 24, 51)",
  },
  "&:active": {},
}));

export default function CustomizedButtons({
  iconLeft,
  iconRight,
  value,
  ...prop
}) {
  return (
    <ColorButton variant={prop.variant}>
      <Stack spacing={2} direction="row">
        {iconLeft}

        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: 700, fontSize: "0.9175rem", lineHeight: 1.7142 }}
        >
          {value}
        </Typography>

        {iconRight}
      </Stack>
    </ColorButton>
  );
}
