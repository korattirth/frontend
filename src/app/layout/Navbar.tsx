import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const boxSX = {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "green",
    },
  };

  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#629549",
            height: "50px",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Button sx={boxSX} component={NavLink} to="/login">
              community
            </Button>
            <Button sx={boxSX} component={NavLink} to={"/login"}>
              Login
            </Button>
            <Button sx={boxSX} component={NavLink} to={"/ragister"}>
              Ragister
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1C343B",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              News
            </Typography>
            <div>
              <Button color="inherit">community</Button>
              <Button color="inherit">Givings</Button>
              <Button color="inherit">Programe & events</Button>
              <Button color="inherit">Travel</Button>
              <Button color="inherit">Graduate Schools</Button>
            </div>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
