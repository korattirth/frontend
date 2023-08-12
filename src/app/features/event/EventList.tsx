import { Box, Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import Event from "./Event";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import "react-multi-carousel/lib/styles.css";
import MoreEvents from "./MoreEvents";
import EventLoader from "../../layout/Loader/EventLoader";

const useStyles = makeStyles((theme: Theme) => ({
  highlightedEvent: {
    "&.MuiTypography-root": {
      lineHeight: "24px",
      fontWeight: 600,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "22px",
    },
  },
}));

const EventList = () => {
  const classes = useStyles();
  const {
    eventStore: { highlightedEvents, getHighlightedEventList, events },
  } = useStore();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    getHighlightedEventList();
  }, [getHighlightedEventList]);

  return (
    <>
      <Container className="mb-5 h-70" style={{marginTop : '95px'}}>
        {highlightedEvents && highlightedEvents.length === 0 ? <EventLoader /> : (
          <>
            <Typography className={classes.highlightedEvent} marginLeft={3}>
              Highlighted events ({highlightedEvents.length})
            </Typography>
            <Carousel responsive={responsive}>
              {highlightedEvents.map((event, idx) => (
                <Box margin={3} marginTop={2} key={idx}>
                  <Event event={event} />
                </Box>
              ))}
            </Carousel>
          </>
        )}
        {events && events.postList && events.postList.length === 0 ? <EventLoader /> :
          <Box className="mb-5">
            {events && events.postList && events.postList.length > 0 &&
              <Typography className={classes.highlightedEvent} marginBottom={3}>
                Upcoming Events
              </Typography>}
            <MoreEvents />
          </Box>}
      </Container>
    </>
  );
};

export default observer(EventList);
