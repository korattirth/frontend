import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Divider,
  ListItemButton,
  Typography,
  Collapse,
  Chip,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useStore } from "../../store/store";
import { history } from "../../..";
import { Roles } from "../../util/shared";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    width: "100%",
  },
  icon: {
    color: "white",
  },
  mainList1: {
    backgroundColor: "#629549",
    color: "white",
  },
  mainList2: {
    backgroundColor: "#1C343B",
    color: "white",
  },
}));

function DrawerComponents() {
  const {
    userStore: { logout, user },
  } = useStore();

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openNavbar1, setOpenNavbar1] = React.useState(true);
  const [openNavbar2, setOpenNavbar2] = React.useState(true);

  const handleNav1Click = () => {
    setOpenNavbar1(!openNavbar1);
  };
  const handleNav2Click = () => {
    setOpenNavbar2(!openNavbar2);
  };

  const handleLogout = () => {
    logout();
    setOpenDrawer(false);
    history.push("/");
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            <ListItem className={classes.mainList1}>
              <ListItemButton onClick={handleNav1Click}>
                <ListItemText primary="Inbox" />
                {openNavbar1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openNavbar1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Community</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                {user ? (
                  <>
                    <ListItem disablePadding onClick={() => handleLogout()}>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText>Logout</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem
                      disablePadding
                      onClick={() => setOpenDrawer(false)}
                    >
                      <Link to="/sign-in" className={classes.link}>
                        <ListItemButton sx={{ textAlign: "center" }}>
                          <ListItemText>Login</ListItemText>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => setOpenDrawer(false)}
                    >
                      <Link to="/sign-up" className={classes.link}>
                        <ListItemButton sx={{ textAlign: "center" }}>
                          <ListItemText>Register</ListItemText>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </>
                )}
              </List>
            </Collapse>

            <ListItem className={classes.mainList2}>
              <ListItemButton onClick={handleNav2Click}>
                <ListItemText primary="Inbox" />
                {openNavbar2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openNavbar2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {user?.role === Roles.Admin && (
                  <>
                    <Divider>
                      <Chip label="Admin" />
                    </Divider>
                    <ListItem
                      disablePadding
                      onClick={() => setOpenDrawer(false)}
                    >
                      <Link to="/user-list" className={classes.link}>
                        <ListItemButton sx={{ textAlign: "center" }}>
                          <ListItemText>User-List</ListItemText>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </>
                )}
                <Divider>
                  <Chip label="Stories" />
                </Divider>
                {user && (
                  <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                    <Link to="/create-post" className={classes.link}>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText>Create-Post</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/post-list" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Post-List</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider>
                  <Chip label="Travel" />
                </Divider>
                {user && (
                  <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                    <Link to="/create-travel-post" className={classes.link}>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText>Create-Post</ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/travel-post-list" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Travel-Post</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider>
                  <Chip label="Other" />
                </Divider>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/sign-up" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Programe & events</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/sign-up" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Travel</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <Link to="/sign-up" className={classes.link}>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText>Graduate Schools</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponents;
