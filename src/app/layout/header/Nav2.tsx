import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { history } from "../../..";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useStore } from "../../store/store";
import { Roles } from "../../util/shared";

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
}));

const Nav2 = () => {
  const classes = useStyle();
  const {
    userStore: { user },
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
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#a81c0c",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component="div"
              sx ={{cursor:'pointer'}}
              onClick={() => history.push("/")}
            >
              <img
                src="maggote_logo.png"
                width="80px"
                alt="logo"
              />
            </Typography>
            <div>
              {user?.role === Roles.Admin ? (
                <Button
                  className={classes.nav2button}
                  onClick={() => history.push("/user-list")}
                >
                  User-List
                </Button>
              ) : (
                null
              )}
              {user && <Button
                  className={classes.nav2button}
                  onClick={() => history.push("/suggest")}
                >
                  Suggest User
                </Button>}
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

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2}}
              style={{pointerEvents:'none'}}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default observer(Nav2);
