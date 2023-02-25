import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";
import { Fade } from "react-awesome-reveal";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#FFFFFF",
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#1C343B",
      fontSize: "36px",
      [theme.breakpoints.down("md")]: {
        fontSize: "33px",
        lineHeight: "normal",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        marginTop: "16px",
        fontSize: "30px",
        marginBottom: "15px",
      },
    },
  },
  subText: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontFamily: "Montserrat",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#1C343B",
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
}));

const Section1 = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Fade direction="left" duration={2000}>
            <img
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="teamPhoto"
              width="90%"
            />
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} padding="0px 15px">
          <Fade direction="right" duration={2000}>
            <Typography className={classes.mainText}>
              Alumni Committee Nominates Harvard Board Candidates
            </Typography>
            <Typography className={classes.subText}>
              Harvard degree holders will have the opportunity to vote for new
              members of the Harvard Board of Overseers and elected directors of
              the Harvard Alumni Association this spring.1
            </Typography>
            <div className={classes.forButton}>
              <Button variant="contained" className={classes.button}>
                Read on the Gazette
              </Button>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Section1);
