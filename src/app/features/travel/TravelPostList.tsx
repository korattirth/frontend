import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import TravelPost from "./TravelPost";
import InfiniteScroll from "react-infinite-scroller";

const TravelPostList = () => {
  const { travelStore } = useStore();
  const { getAllPost, travelPosts } = travelStore;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  var currentPage = 1;
  var pageSize = 3;

  isMd ? (pageSize = 2) : (pageSize = 3);
  useEffect(() => {
    getAllPost(currentPage, pageSize);
  }, []);

  const handleNext = () => {
    currentPage = travelPosts!.currentPage + 1;
    getAllPost(currentPage, pageSize);
  };

  return (
    <>
      <Container className="mb-5">
        {travelPosts && (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleNext}
            hasMore={travelPosts.totalPages > travelPosts.currentPage}
            loader={<h1 key={0}>Loading...</h1>}
            initialLoad={false}
          >
            <Grid container spacing={5} minHeight={"80vh"}>
              {travelPosts?.postList?.map((travelPost, idx) => (
                <Grid item sm={6} lg={4} key={idx}>
                  <TravelPost travelPost={travelPost} />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Container>
    </>
  );
};
export default observer(TravelPostList);
