import { Button, Grid, Typography, colors } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";
import { history } from "../../..";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#a81c0c",
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "white",
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
      color: "white",
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
          <img
            src="../MGT.jpg"
            alt="teamPhoto"
            width="90%"
          />
        </Grid>
        <Grid item xs={12} sm={6} padding="0px 15px">
          <Typography className={classes.mainText}>
            Alumni Committee Nominates Alumni Board Candidates
          </Typography>
          <Typography className={classes.subText}>
            High School Diploma degree holders will have the opportunity to vote for new
            members of the ALumni Board of Overseers and elected directors of
            the Maggotty High School Alumni Association this spring.
          </Typography>
          <div className={classes.forButton}>
            <Button variant="contained" style={{backgroundColor: '#ffcc2c',color: 'black'}} className={classes.button} onClick={() => history.push('/travel-post-list')}>
              Read on the Gazette
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Section1);
