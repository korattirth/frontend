import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Post from "./Post";
import { useEffect } from "react";
import { useStore } from "../../store/store";

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
  const {
    postStore: { post, getAllPost }} = useStore();

  useEffect(() => {
    getAllPost();
  }, [getAllPost]);

  return (
    <>
      <Container>
        <Box width="100%" textAlign="center">
          <Typography className={classes.title}>Trending</Typography>
        </Box>
        {/* <Post /> */}
        <Grid container spacing={6} marginTop={6} marginBottom={10}>
          {post && post.map((post, idx) => (
            <Grid item md={6} key={idx}>
            <Post post = {post} />
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default observer(PostList);
