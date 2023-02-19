import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#F5F5F5",
  },
  mainText: {
    "&.MuiTypography-root": {
      lineHeight: "47.48px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#1C343B",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      fontSize : '36px'
    },
  },
  dateText: {
    "&.MuiTypography-root": {
      lineHeight: "35px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "black",
      fontSize: '36px',
      textAlign : 'left',
      [theme.breakpoints.down("md")]: {
        fontSize: '30px',
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '25px',
        textAlign: 'center',
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
        fontSize: '12px',
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
      [theme.breakpoints.down("sm")]: {
        fontSize: '20px',
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
      [theme.breakpoints.up("md")]: {
        marginRight : '10px'
      },
    },
  },
  forButton: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
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
          sm={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
            alt="teamPhoto"
            width="70%"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography className={classes.mainText}>
            Programs & Events
          </Typography>
          <Grid container textAlign='center' spacing={2} marginTop='37px'>
            <Grid item xs={2}>
              <Typography className={classes.dateText}>
                FEB
              </Typography>
              <Typography className={classes.dateText}>
                06
              </Typography>
            </Grid>
            <Grid item xs={10} textAlign='left'>
              <Typography className={classes.subText}>Vero Beach, FL | Social</Typography>
              <Typography className={classes.subText1}>HYP Annual Golf Outing | February 6, 2023</Typography>
              <Typography className={classes.subText}>Harvard Club of Vero Beach</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.dateText}>
                FEB
              </Typography>
              <Typography className={classes.dateText}>
                06
              </Typography>
            </Grid>
            <Grid item xs={10} textAlign='left'>
              <Typography className={classes.subText}>Lecture/Reading/Talk</Typography>
              <Typography className={classes.subText1}>Mary Lum: The Moving Parts (&)</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.dateText}>
                FEB
              </Typography>
              <Typography className={classes.dateText}>
                06
              </Typography>
            </Grid>
            <Grid item xs={10} textAlign='left'>
              <Typography className={classes.subText}>Lecture/Reading/Talk</Typography>
              <Typography className={classes.subText1}>Mary Lum: The Moving Parts (&)</Typography>
            </Grid>
          </Grid>
          <div className={classes.forButton}>
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
