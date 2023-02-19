import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#1C343B",
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#ffffff",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
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
    },
  },
  forButton: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  mainDIv: {
    paddingLeft: "120px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6} display="flex" alignItems="center">
          <Box className={classes.mainDIv}>
            <Typography className={classes.mainText} sx={{ fontSize: "36px" }}>
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
