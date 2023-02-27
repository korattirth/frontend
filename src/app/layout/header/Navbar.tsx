import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import DrawerComponents from "./DrawerComponents";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(967));

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
            {isMobile ? <DrawerComponents /> : <Nav1 />}
          </Toolbar>
        </AppBar>
      </Box>
      
    {!isMobile ? <Nav2/> : null}
    </>
  );
};

export default observer(Navbar);
