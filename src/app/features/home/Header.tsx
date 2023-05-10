import { observer } from "mobx-react-lite";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { history } from "../../..";

const Section = styled("section")({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    // zIndex: -1,
  },
});

const BackgroundImage = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  //   backgroundRepeat : 'no-repeat',
  backgroundPosition: "center",
  backgroundImage: `url('../israel-andrade-YI_9SivVt_s-unsplash.jpg')`,
});

const useStyle = makeStyles((theme: Theme) => ({
  button: {
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      lineHeight: "17px",
      fontWeight: "500",
      fontSize: "14px",
      height: "47px",
      marginRight: "10px",
      marginTop: "10px",
      borderColor: "white",
      color: "white",
    },
  },
  headingText: {
    "&.MuiTypography-root": {
      fontSize: "48px",
      fontFamily: "Roboto Slab",
      lineHeight: "63px",
      fontWeight: 600,
      color: "#ffffff",
    },
  },
  bodyText: {
    "&.MuiTypography-root": {
      fontSize: "24px",
      fontFamily: "Montserrat",
      lineHeight: "29px",
      fontWeight: 500,
      color: "#ffffff",
      marginTop: "32px",
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <BackgroundImage />
        <Container maxWidth="md" style={{ position: "absolute", zIndex: "2" }}>
          <Box>
            <Typography className={classes.headingText}>
              Meet Ts High School Alumni Association President
            </Typography>
            <Typography className={classes.bodyText}>
            To maintain the relationship of alumni to Stuyvesant High School (the “School”) 
            and to each other through written and other communications, and social, academic 
            and other events;
            </Typography>
            
          
            <Button variant="contained" className={classes.button} onClick={() => history.push('/travel-post-list')}>
              Read the Announcement
            </Button>
            <Button variant="outlined" className={classes.button} onClick={() => history.push('/travel-post-list')}>
              Hear from Claudine Gay
            </Button>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default observer(Header);
