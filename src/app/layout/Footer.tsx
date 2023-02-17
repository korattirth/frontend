import { Box, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import { makeStyles } from "@mui/styles";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Montserrat:wght@100;400&family=Roboto+Slab&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Montserrat:wght@100;400&family=Roboto+Slab&display=swap');
</style>;

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#1C343B",
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
              <p className={classes.firstDivText1}>Lorem, ipsum dolor elit.</p>
              <p className={classes.firstDivText2}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            </div>
            <div>
              <p className={classes.firstDivText1}>Lorem, ipsum dolor elit.</p>
              <p className={classes.firstDivText2}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
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
            <Grid item md={4} sm={12}>
              <p className={classes.secodeDivText1}>CONTACT</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
            </Grid>
            <Grid item md={4} sm={12}>
              <p className={classes.secodeDivText1}>Social Media</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
            </Grid>
            <Grid item md={4} sm={12}>
              <p className={classes.secodeDivText1}>Get Help</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
              <p className={classes.secodeDivText2}>Lorem ipsum elit Porro.</p>
            </Grid>
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
