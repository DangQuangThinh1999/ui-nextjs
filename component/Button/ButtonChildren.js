import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
import { ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const CustomIcon = styled(({ themeStyle, ...props }) => (
  <CircleIcon {...props} />
))(({ themeStyle }) => ({
  color: themeStyle ? "red" : "rgb(99, 115, 129)",
  fontSize: themeStyle ? "0.6rem" : "0.275rem",

  // Icon change fontsize and color
  "&:hover": {
    color: "green",
  },
}));

const textItem = {
  fontSize: "0.9rem",
  lineHeight: 1,
  fontWeight: 400,
};

const textClick = {
  fontSize: "0.9rem",
  lineHeight: 1,
  color: "black",
  fontWeight: 600,
};
export default function ButtonChildren({ ...props }) {
  return (
    <Link href="/about">
      <ListItemButton sx={{}}>
        <ListItemIcon>
          <CustomIcon themeStyle={true} />
        </ListItemIcon>
        <ListItemText
          sx={{ marginLeft: "-35px" }}
          primary={
            <Typography variant="h4" component="h3" style={textClick}>
             OK
            </Typography>
          }
        />
      </ListItemButton>
    </Link>
  );
}
