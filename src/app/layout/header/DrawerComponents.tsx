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
  Chip,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

import { useStore } from "../../store/store";
import { history } from "../../..";
import { Roles } from "../../util/shared";

const useStyles = makeStyles(() => ({
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
          <Typography
            component="div"
            sx={{ my: 2 }}
            onClick={() => {
              history.push("/");
              setOpenDrawer(false);
            }}
          >
            <img src="logo-png-removebg-preview.png" width="150px" alt="logo" />
          </Typography>

          <List component="div" disablePadding>
            {user?.role === Roles.Admin && (
              <>
                {/*  Admin - UserList*/}
                <Divider>
                  <Chip label="Admin" />
                </Divider>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/user-list")}
                  >
                    <ListItemText>User-List</ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}

            {/* Stories */}
            {user && (
              <>
                <Divider>
                  <Chip label="Stories" />
                </Divider>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/create-post")}
                  >
                    <ListItemText>Create-Stories</ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}
            <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => history.push("/post-list")}
              >
                <ListItemText>Stories</ListItemText>
              </ListItemButton>
            </ListItem>

            {/* Travel */}
            {user && (
              <>
                <Divider>
                  <Chip label="News" />
                </Divider>
                {user.role === Roles.Admin && (
                  <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={() => history.push("/create-travel-post")}
                    >
                      <ListItemText>Create-News</ListItemText>
                    </ListItemButton>
                  </ListItem>
                )}
              </>
            )}
            <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => history.push("/travel-post-list")}
              >
                <ListItemText>News</ListItemText>
              </ListItemButton>
            </ListItem>

            {/* Events */}
            {user && (
              <>
                <Divider>
                  <Chip label="Events" />
                </Divider>
                {user.role === Roles.Admin && (
                  <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={() => history.push("/create-event")}
                    >
                      <ListItemText>Create Events</ListItemText>
                    </ListItemButton>
                  </ListItem>
                )}
              </>
            )}
            <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => history.push("/event-list")}
              >
                <ListItemText>Events</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>

          {/* Contact */}
          {user && (
            <>
              <Divider>
                <Chip label="Contact us" />
              </Divider>
              {user.role === Roles.Admin && (
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/create-travel-post")}
                  >
                    <ListItemText>Create-Travel-Post</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
              <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/suggest")}
                  >
                    <ListItemText>Suggest User</ListItemText>
                  </ListItemButton>
              </ListItem>
            </>
          )}
          <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => history.push("/que-ans")}
            >
              <ListItemText>FAQs</ListItemText>
            </ListItemButton>
          </ListItem>

          {/* Account */}
          <List component="div" disablePadding>
            <Divider>
              <Chip label="Account" />
            </Divider>
            <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => history.push("/user-details")}
              >
                <ListItemText>My Profile</ListItemText>
              </ListItemButton>
            </ListItem>
            {user ? (
              <>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/my-cart")}
                  >
                    <ListItemText>My Cart</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/orders")}
                  >
                    <ListItemText>My Orders</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => handleLogout()}>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/sign-in")}
                  >
                    <ListItemText>Login</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => setOpenDrawer(false)}>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => history.push("/sign-up")}
                  >
                    <ListItemText>Register</ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            )}
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
