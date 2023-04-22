import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "100px 0px",
    background: "#F5F5F5",
    "&.MuiGrid-root": {
      // marginLeft: "-8px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
    },
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
      fontSize: "36px",
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
      height: "47px",
      margin: "10px 25px 0px 0px",
    },
  },
  forButton: {
    marginTop: "30px",
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
    [theme.breakpoints.up("sm")]: {
      marginRight: "20px",
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

const Section4 = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.mainDIv}>
            <Typography className={classes.mainText}>
              TS High School Alumni Day Is Back!
            </Typography>
            <Typography className={classes.subText}>
              Save the date for the second annual Alumni Day! All alumni
              from across the School are invited to join the HAA on Friday,
              June 2, 2023, to celebrate TS High School's vibrant, alumni
              community.
            </Typography>
            <div className={classes.forButton}>
              <Button variant="contained" className={classes.button}>
                Read on the Gazette
              </Button>
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
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="teamPhoto"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Section4);
