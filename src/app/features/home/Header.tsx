import { observer } from "mobx-react-lite";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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
    backgroundColor: "rgba(0,0,0,0.5)",
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

const Header = () => {
  return (
    <>
      <Section>
        <BackgroundImage />
        <Container maxWidth="md" style={{ position: "absolute", zIndex: "2" }}>
          <Box>
            <Typography variant="h3" component="h1" color="white">
              Meet Harvard’s 30th President
            </Typography>
            <Typography variant="h6" color="white" sx={{ mt: 4 }}>
              Claudine Gay PhD ’98, Edgerley Family Dean of Harvard's Faculty of
              Arts and Sciences and a distinguished scholar of democracy and
              political participation, will become the first woman of color to
              lead the University.
            </Typography>
            <Button
              variant="contained"
              sx={{ marginRight: "10px", marginTop: "10px" }}
            >
              Read the Announcement
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "white", marginTop: "10px" }}
            >
              Hear from Claudine Gay
            </Button>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default observer(Header);
