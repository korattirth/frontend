import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import InfiniteScroll from "react-infinite-scroller";
import Event from "./Event";
import { observer } from "mobx-react-lite";
import Loader from "../../layout/Loader/Loader";

const MoreEvents = () => {
  const { eventStore } = useStore();
  const { getEventList, events } = eventStore;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  var currentPage = 1;
  var pageSize = 3;

  isMd ? (pageSize = 2) : (pageSize = 3);
  useEffect(() => {
    getEventList(currentPage, pageSize);
  }, []);

  const handleNext = () => {
    currentPage = events!.currentPage + 1;
    getEventList(currentPage, pageSize);
    };

  return (
    <div>
      {events && (
        <InfiniteScroll
          pageStart={0}
          loadMore={handleNext}
          hasMore={events.totalPages > events.currentPage}
          loader={<Loader key={0} />}
          initialLoad={false}
        >
          <Grid container spacing={5}>
            {events?.postList?.map((event, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={idx}>
                <Event event={event} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll> 
      )}
    </div>
  );
};

export default observer(MoreEvents);
