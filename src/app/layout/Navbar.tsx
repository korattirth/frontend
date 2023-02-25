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
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComponents from "./DrawerComponents";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { useState } from "react";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";

const useStyle = makeStyles((theme: Theme) => ({
  button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "15px",
      fontWeight: "600",
      fontSize: "12px",
      color: "white",
    },
  },
  nav2button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "22px",
      fontWeight: "500",
      fontSize: "18px",
      color: "white",
    },
  },
  menu: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));

function Navbar() {
  const classes = useStyle();
  const {
    commonStore: { token },
    userStore: { logout ,user},
  } = useStore();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(967));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <Toolbar variant="dense">
            {isMobile ? (
              <DrawerComponents />
            ) : (
              <>
                <Button className={classes.button} component={NavLink} to="/">
                  community
                </Button>
                {token ? (
                  // <Button onClick={logout} className={classes.button}>
                  //   Logout
                  // </Button>
                  <>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                      </IconButton>
                    </Tooltip>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      className={classes.menu}
                      PaperProps={{
                        elevation: 0,
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar /> {user?.fName}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={logout}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Button
                      className={classes.button}
                      component={NavLink}
                      to={"/sign-in"}
                    >
                      Login
                    </Button>
                    <Button
                      className={classes.button}
                      component={NavLink}
                      to={"/sign-up"}
                    >
                      Register
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
                  <Button className={classes.nav2button}>community</Button>
                  <Button className={classes.nav2button}>Givings</Button>
                  <Button className={classes.nav2button}>
                    Programe & events
                  </Button>
                  <Button className={classes.nav2button}>Travel</Button>
                  <Button className={classes.nav2button}>
                    Graduate Schools
                  </Button>
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
