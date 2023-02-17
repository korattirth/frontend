import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerComponents from "./DrawerComponents";

function Navbar() {
  const {
    commonStore: { token },
  } = useStore();
  const {
    userStore: { logout },
  } = useStore();

  const boxSX = {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "green",
    },
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          <Toolbar variant="dense">
            {isMobile ? (
              <DrawerComponents />
            ) : (
                <>
                <Button sx={boxSX} component={NavLink} to="/login">
                  community
                </Button>
                {token ? (
                  <Button sx={boxSX} onClick={logout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button sx={boxSX} component={NavLink} to={"/sign-in"}>
                      Login
                    </Button>
                    <Button sx={boxSX} component={NavLink} to={"/sign-up"}>
                      Ragister
                    </Button>
                  </>
                )}
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {!isMobile ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#1C343B",
              }}
            >
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
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
      ) : null}
    </>
  );
}

export default observer(Navbar);
