import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../..";
import { useStore } from "../../store/store";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { observer } from "mobx-react-lite";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

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

const Nav1 = () => {
  const classes = useStyle();
  const {
    userStore: { logout,user },
  } = useStore();
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
      {user ? (
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
              <Avatar sx={{ width: 32, height: 32 }}>
                {user.image && (
                  <img src={user.image} width="35px" alt={user.fName} />
                )}
              </Avatar>
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
            <MenuItem onClick={() => history.push("/user-details")}>
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => history.push('/my-cart')}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              My Cart
            </MenuItem>
            <MenuItem onClick={() => history.push('/orders')}>
              <ListItemIcon>
                <ShoppingBagOutlinedIcon />
              </ListItemIcon>
              My Orders
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
  );
};

export default observer(Nav1);
