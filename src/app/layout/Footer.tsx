import { Box, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#a81c0c",
  },
  icon: {
    color: "white",
  },
  firstDivText1: {
    fontWeight: 600,
    lineHeight: "32px",
    fontSize: "24px",
    fontFamily: "Roboto Slab",
    color: "white",
  },
  firstDivText2: {
    fontWeight: 500,
    lineHeight: "19.5px",
    fontSize: "16px",
    fontFamily: "Montserrat",
    color: "white",
  },
  secodeDivText1: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "18px",
    color: "white",
    fontFamily: "Roboto Slab",
  },
  secodeDivText2: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "17px",
    color: "white",
    fontFamily: "Montserrat",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}  minHeight="361px">
        <Grid
          item
          sm={5}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box>
            <div>
              <p className={classes.firstDivText1}>MAILING ADDRESS: 
</p>
              <p className={classes.firstDivText2}>
      Maggotty High School P.O Box 4 Maggotty St. Elizabeth. Jamaica, W.I.              </p>
            </div>
            <div>
              <p className={classes.firstDivText1}>OFFICE LOCATION: </p>
              <p className={classes.firstDivText2}>
              345 Chambers Street, Room 101, NY, NY
              </p>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            spacing={3}
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={4} sm={20}>
              <p className={classes.secodeDivText1}>CONTACT PERSON</p>
              <p className={classes.secodeDivText2}>President: Jim Carry</p>
              <p className={classes.secodeDivText2}>VP: Alison Cartor </p>
              <p className={classes.secodeDivText2}>Secretory: Matt Smith</p>
              <p className={classes.secodeDivText2}>Treasurer: john garcia</p>

            </Grid>
            <Grid item md={4} sm={20}>
              <p className={classes.secodeDivText1}>EMAILS</p>
              <p className={classes.secodeDivText2}>jim.carry@gmail.com</p>
              <p className={classes.secodeDivText2}>alisoncartor33@yahoo.com</p>
              <p className={classes.secodeDivText2}>msmith@aol.com</p>
              <p className={classes.secodeDivText2}>johngarcia@gmail.com</p>

            </Grid>
            {/* <Grid item md={4} sm={20}>
              <p className={classes.secodeDivText1}>Get Help</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid
          item
          sm={3}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <InstagramIcon className={classes.icon} />
          <FacebookIcon className={classes.icon} />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
