import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 20px",
    background: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      padding: "60px 20px",
    },
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#1C343B",
      fontSize: "36px",
      marginBottom: "60px",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "33px",
        lineHeight: "normal",
        marginBottom: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
    },
  },
  dateText: {
    "&.MuiTypography-root": {
      lineHeight: "35px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "black",
      fontSize: "36px",
      textAlign: "left",
      [theme.breakpoints.down("md")]: {
        fontSize: "27px",
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "21px",
      },
    },
  },
  subText: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontFamily: "Roboto Slab",
      lineHeight: "21px",
      fontWeight: 400,
      color: "#000000",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  subText1: {
    "&.MuiTypography-root": {
      fontSize: "24px",
      fontFamily: "Roboto Slab",
      lineHeight: "32px",
      fontWeight: 400,
      color: "#000000",
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  },
  button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "17px",
      fontWeight: "500",
      fontSize: "14px",
      height: "47px",
      [theme.breakpoints.down(1097)]: {
        marginBottom: "15px",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "10px",
      },
    },
  },
  forButton: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  leftSideMainDiv: {
    display: "flex",
    marginBottom: "40px",
  },
  leftSideDateText: {
    "&.MuiTypography-root": {
      fontSize: "14px",
      fontFamily: "Roboto Slab",
      lineHeight: "18px",
      fontWeight: 400,
      color: "#000000",
    },
  },
  leftSideText1: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontFamily: "Roboto Slab",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#000000",
    },
  },
  leftSideText2: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontFamily: "Montserrat",
      lineHeight: "20px",
      fontWeight: 400,
      color: "#000000",
    },
  },
  storiesBox: {
    width: "240px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}));

const Section3 = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <Typography className={classes.mainText}>Stories</Typography>
            <Box className={classes.leftSideMainDiv}>
              <Box marginRight="25px">
                <img
                  src="https://images.unsplash.com/photo-1676378385233-65e5615f7b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="person"
                  width="100px"
                />
              </Box>
              <Box className={classes.storiesBox}>
                <Typography className={classes.leftSideDateText}>
                  JANUARY 13, 2023
                </Typography>
                <Typography className={classes.leftSideText1}>
                  Sarah Karmon Named HAA Executive Director
                </Typography>
                <Typography className={classes.leftSideDateText}>
                  A longtime member of the Harvard community, Karmon is the
                  first woman to serve in the Harvard Alumni Association's top
                  administrative role.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.leftSideMainDiv}>
              <Box marginRight="25px">
                <img
                  src="https://images.unsplash.com/photo-1675461090102-86d2c2dce4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="person"
                  width="100px"
                />
              </Box>
              <Box className={classes.storiesBox}>
                <Typography className={classes.leftSideDateText}>
                  JANUARY 12, 2023
                </Typography>
                <Typography className={classes.leftSideText1}>
                  Gift to Honor Global Health Champion Paul Farmer
                </Typography>
                <Typography className={classes.leftSideDateText}>
                  The Cummings Foundation has committed $50 million for an
                  alliance between Harvard Medical School and the University of
                  Global Health Equity in Rwanda.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.leftSideMainDiv}>
              <Box marginRight="25px">
                <img
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="person"
                  width="100px"
                />
              </Box>
              <Box className={classes.storiesBox}>
                <Typography className={classes.leftSideDateText}>
                  JANUARY 12, 2023
                </Typography>
                <Typography className={classes.leftSideText1}>
                  Gift to Honor Global Health Champion Paul Farmer
                </Typography>
                <Typography className={classes.leftSideDateText}>
                  The Cummings Foundation has committed $50 million for an
                  alliance between Harvard Medical School and the University of
                  Global Health Equity in Rwanda.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.forButton}>
              <Button
                variant="contained"
                sx={{ marginBottom: "30px" }}
                className={classes.button}
              >
                View All Stories
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Typography className={classes.mainText}>
            Programs & Events
          </Typography>

          <Grid container>
            <Grid item xs={2}>
              <Typography className={classes.dateText}>FEB</Typography>
              <Typography className={classes.dateText}>06</Typography>
            </Grid>
            <Grid item xs={10} marginBottom={4}>
              <Typography className={classes.subText}>
                Vero Beach, FL | Social
              </Typography>
              <Typography className={classes.subText1}>
                HYP Annual Golf Outing | February 6, 2023
              </Typography>
              <Typography className={classes.subText}>
                Harvard Club of Vero Beach
              </Typography>
            </Grid>
            <Grid item xs={2} marginBottom={4}>
              <Typography className={classes.dateText}>FEB</Typography>
              <Typography className={classes.dateText}>06</Typography>
            </Grid>
            <Grid item xs={10} textAlign="left" marginBottom={4}>
              <Typography className={classes.subText}>
                Lecture/Reading/Talk
              </Typography>
              <Typography className={classes.subText1}>
                Mary Lum: The Moving Parts (&)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.dateText}>FEB</Typography>
              <Typography className={classes.dateText}>06</Typography>
            </Grid>
            <Grid item xs={10} textAlign="left" marginBottom={4}>
              <Typography className={classes.subText}>
                Lecture/Reading/Talk
              </Typography>
              <Typography className={classes.subText1}>
                Mary Lum: The Moving Parts (&)
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.forButton} style={{ marginTop: "30px" }}>
            <Button variant="outlined" className={classes.button}>
              View All Upcoming Events
            </Button>
            <Button variant="outlined" className={classes.button}>
              View Featured Programs
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Section3);
