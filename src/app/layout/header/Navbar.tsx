import { Box, AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Tooltip, Avatar, ListItemIcon, Divider, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { history } from "../../..";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../store/store";
import { Roles } from "../../util/shared";
import { NavLink } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DrawerComponents from "./DrawerComponents";
import clsx from "clsx";

const useStyle = makeStyles((theme: Theme) => ({
  nav2button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "22px",
      fontWeight: "500",
      fontSize: "18px",
      color: "white",
    },
  },
  button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "15px",
      fontWeight: "600",
      fontSize: "12px",
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

const NavBar = () => {
  const classes = useStyle();
  const {
    userStore: { user, logout },
  } = useStore();
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE1);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE1(null);
  };
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const [anchorE3, setAnchorE3] = useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorE3);
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const [anchorE4, setAnchorE4] = useState<null | HTMLElement>(null);
  const open4 = Boolean(anchorE4);
  const handleClick4 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorE4(null);
  };
  const theme = useTheme();
  const screenSize:number = user?.role === Roles.Admin ? 967 : 840;
  const isMobile = useMediaQuery(theme.breakpoints.down(screenSize));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={clsx('height-60 justify-content-center',isMobile ? 'align-items-end' : '')}>
          {isMobile ? <DrawerComponents /> : 
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }} onClick={() => history.push("/")}>
            <img src="logo-png-removebg-preview.png" width="150px" alt="logo" />
          </Typography>
          <div>
            {user?.role === Roles.Admin && <Button className={classes.nav2button} onClick={() => history.push("/user-list")}>User-List</Button>}
            {user && <Button className={classes.nav2button} onClick={() => history.push("/suggest")}>Suggest User</Button>}
            {user && user.role === Roles.Admin ? (
              <>
                <Button
                  id="event-button"
                  aria-controls={open3 ? "event-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  onClick={handleClick3}
                  className={classes.nav2button}
                >
                  Events
                </Button>
                <Menu
                  id="event-menu"
                  aria-labelledby="event-button"
                  anchorEl={anchorE3}
                  open={open3}
                  onClose={handleClose3}
                  onClick={handleClose3}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => history.push("/create-event")}>
                    Create Event
                  </MenuItem>
                  <MenuItem onClick={() => history.push("/event-list")}>
                    Events
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                className={classes.nav2button}
                onClick={() => history.push("/event-list")}
              >
                Events
              </Button>
            )}
            {user && user.role === Roles.Admin ? (
              <>
                <Button
                  id="travel-post-button"
                  aria-controls={open1 ? "travel-post-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick1}
                  className={classes.nav2button}
                >
                  News
                </Button>
                <Menu
                  id="travel-post-menu"
                  aria-labelledby="travel-post-button"
                  anchorEl={anchorE1}
                  open={open1}
                  onClose={handleClose1}
                  onClick={handleClose1}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem
                    onClick={() => history.push("/create-travel-post")}
                  >
                    Create News
                  </MenuItem>
                  <MenuItem onClick={() => history.push("/travel-post-list")}>
                    News
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                className={classes.nav2button}
                onClick={() => history.push("/travel-post-list")}
              >
                News
              </Button>
            )}
            <Button
              id="post-button"
              aria-controls={open2 ? "post-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              className={classes.nav2button}
            >
              Post
            </Button>
            <Menu
              id="post-menu"
              aria-labelledby="post-button"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              onClick={handleClose2}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => history.push("/create-post")}>
                Create Stories
              </MenuItem>
              <MenuItem onClick={() => history.push("/post-list")}>
                Stories
              </MenuItem>
            </Menu>
            {user && <Button onClick={() => history.push("/que-ans")} className={classes.nav2button}>FAQs</Button>}
            <Button
              className={classes.nav2button}
              onClick={() => history.push("/our-team")}
            >
              Our Team
            </Button>
          </div>
          <div>
            {user ?
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick4}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open4 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open4 ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>{user.image && (<img src={user.image} width="35px" alt={user.fName} />)}</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorE4} id="account-menu" open={open4} onClose={handleClose4} onClick={handleClose4} className={classes.menu} PaperProps={{elevation: 0}} transformOrigin={{ horizontal: "right", vertical: "top" }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                  <MenuItem onClick={() => history.push("/user-details")}><ListItemIcon><Avatar /></ListItemIcon>My account</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => history.push('/my-cart')}><ListItemIcon><ShoppingCartOutlinedIcon /></ListItemIcon>My Cart</MenuItem>
                  <MenuItem onClick={() => history.push('/orders')}><ListItemIcon><ShoppingBagOutlinedIcon /></ListItemIcon>My Orders</MenuItem>
                  <MenuItem onClick={logout}><ListItemIcon><Logout fontSize="small" /></ListItemIcon>Logout</MenuItem>
                </Menu>
              </> :
              <>
                <Button className={classes.button} component={NavLink} to={"/sign-in"}>Login</Button>
                <Button className={classes.button} component={NavLink} to={"/sign-up"}>Register</Button>
              </>}
          </div>
        </Toolbar>}
        </AppBar>
      </Box>
    </>
  );
};

export default observer(NavBar);
