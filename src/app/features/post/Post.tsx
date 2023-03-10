import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { observer } from "mobx-react-lite";
import { StoriesPostModel } from "../../model/Post";
import { getRole } from "../../util/helper";
import { history } from "../../..";

interface Props {
  post: StoriesPostModel;
  postId?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&.MuiBox-root": {
      [theme.breakpoints.up("sm")]: {
        minHeight: "601px",
      },
    },
  },
  descriptionBox: {
    padding : "20px 24px 24px 24px",
    [theme.breakpoints.up("sm")]: {
      minHeight: "352px",
    },
  },
  imageContainer: {
    // height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: "20px 0px 0px 20px",
    height: "100%",
    width: "100%",
    objectFit: "fill",
    [theme.breakpoints.down("md")]: {
      borderRadius: "20px 20px 0px 0px",
    },
  },
  description: {
    padding: "16px",
    borderTop: "1px solid #000000",
    borderRight: "1px solid #000000",
    borderBottom: "1px solid #000000",
    borderRadius: "0px 20px 20px 0px",
    [theme.breakpoints.down("md")]: {
      border: "none",
      borderBottom: "1px solid #000000",
      borderLeft: "1px solid #000000",
      borderRight: "1px solid #000000",
      borderRadius: "0px 0px 20px 20px",
    },
  },
  titleText: {
    "&.MuiTypography-root": {
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "18px",
    },
  },
  descriptionText: {
    "&.MuiTypography-root": {
      lineHeight: "20px",
      fontWeight: 400,
      fontFamily: "'Montserrat'",
      color: "#000000",
      fontSize: "16px",
      wordBreak: "break-all",
    },
  },
}));

const Post = ({ post,postId }: Props) => {
  const classes = useStyles();
  var isSignlePost: boolean = false;
  postId === post._id ? (isSignlePost = true) : (isSignlePost = false);

  return (
    <Box marginBottom={4}>
      <Box component={Card} className={classes.root}>
        <img
          src={post.image}
          style={{ width: "100%", height: "260px", objectFit: "contain" }}
          alt={post.image}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          className = {classes.descriptionBox}
        >
          <Box>
            <Typography className={classes.titleText}>{post.topic}</Typography>
            <Typography className={classes.descriptionText} marginBottom={3}>
              <span style={{ fontSize: "13px" }}>Date : 10-2-2022</span>
            </Typography>
            <Typography className={classes.descriptionText}>
              {isSignlePost ? (
                post.description
              ) : (
                <>
                  {post.description.slice(0, 150)}
                  {post.description.length > 150 ? "......." : null}
                </>
              )}
            </Typography>
          </Box>
          <Box>
            <CardHeader
              sx={{ padding: "0px", marginTop: "20px" }}
              avatar={
                <Avatar sx={{ width: 40, height: 40 }}>
                  {post.userId.image && (
                    <img
                      src={post.userId.image}
                      width="38px"
                      alt={post.userId.fName}
                    />
                  )}
                </Avatar>
              }
              title={
                <Typography className={classes.titleText}>
                  {post.userId.fName} {post.userId.lName}
                </Typography>
              }
              subheader={
                <Typography
                  className={classes.descriptionText}
                  sx={{ "&.MuiTypography-root": { color: "#939393" } }}
                >
                  {getRole(post.userId.role)}
                </Typography>
              }
            />
            <Box textAlign="right">
              {isSignlePost ? (
                <Button
                  variant="outlined"
                  onClick={() => history.push("/post-list")}
                >
                  Back
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => history.push(`/post/${post._id}`)}
                >
                  Show More
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(Post);
