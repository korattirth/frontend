import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Post from "./Post";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import InfiniteScroll from "react-infinite-scroller";

const useStyle = makeStyles((theme: Theme) => ({
  title: {
    "&.MuiTypography-root": {
      lineHeight: "63px",
      fontWeight: 600,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "48px",
      marginBottom: "43px",
      marginTop: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
  },
}));

const PostList = () => {
  const classes = useStyle();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));
  const {
    postStore: { posts, getAllPost },
  } = useStore();

  var currentPage = 1;
  var pageSize = 3;

  isMd ? pageSize = 2 : pageSize = 3;

  useEffect(() => {
    getAllPost(currentPage,pageSize);
  }, []);

  const handleNext = () => {
    currentPage = posts!.currentPage + 1;
    getAllPost(currentPage,pageSize);
  };

  return (
    <>
      <Container>
        <Box width="100%" textAlign="center">
          <Typography className={classes.title}>Trending</Typography>
        </Box>
        <Container className="mb-5">
          {posts && (
            <InfiniteScroll
              pageStart={0}
              loadMore={handleNext}
              hasMore={posts.totalPages > posts.currentPage}
              loader={<h1 key={0}>Loading...</h1>}
              initialLoad = {false}
            >
              <Grid container spacing={5} minHeight={"80vh"}>
                {posts &&
                  posts.postList.map((post, idx) => (
                    <Grid item sm={6} lg={4} key={idx}>
                      <Post post={post} key={idx} />
                    </Grid>
                  ))}
              </Grid>
             </InfiniteScroll>
          )}
        </Container>
      </Container>
    </>
  );
};

export default observer(PostList);
