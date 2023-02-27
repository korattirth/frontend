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
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  return (
    <>
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
              <Button className={classes.nav2button}>Givings</Button>
              <Button className={classes.nav2button}>Programe & events</Button>
              <Button className={classes.nav2button}>Travel</Button>
              <Button className={classes.nav2button}>Graduate Schools</Button>
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
                  Create Post
                </MenuItem>
                <MenuItem onClick={() => history.push("/post-list")}>
                  Post-List
                </MenuItem>
              </Menu>
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
};

export default observer(Nav2);
