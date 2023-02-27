import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#1C343B",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 20px",
    },
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      marginBottom: "15px",
      color: "#ffffff",
      fontSize: "36px",
      [theme.breakpoints.down("md")]: {
        fontSize: "33px",
        lineHeight: "normal",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        fontSize: "30px",
      },
    },
  },
  subText: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontFamily: "Montserrat",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#ffffff",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "17px",
      fontWeight: "500",
      fontSize: "14px",
      marginTop: "30px",
      height: "47px",
    },
  },
  forButton: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  mainDIv: {
    paddingLeft: "120px",
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  secondDIv: {
    display: "flex",
    justifyContent: "end",
    paddingRight: "120px",
    [theme.breakpoints.down("md")]: {
      paddingRight: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: "20px",
      alignItems: "center",
    },
  },
}));

const Section2 = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} display="flex" alignItems="center">
          <Box className={classes.mainDIv}>
            <Typography className={classes.mainText}>
              A New Place to Gather
            </Typography>
            <Typography className={classes.subText}>
              Harvard's first University-wide conference center will serve as a
              state-of-the-art convening and innovation hub within the planned
              Enterprise Research Campus in Allston.
            </Typography>
            <div className={classes.forButton}>
              <Button variant="contained" className={classes.button}>
                Read on the Gazette
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box className={classes.secondDIv}>
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="teamPhoto"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Section2);
