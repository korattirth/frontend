import { Avatar, Box, Card, CardHeader, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { getRole } from "../../util/helper";
import { TravelPostModel } from "../../model/Post";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import { history } from "../../..";
interface Props {
  travelPost: TravelPostModel;
  postId?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
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

const TravelPost = ({ travelPost, postId }: Props) => {
  const classes = useStyles();
  var isSignlePost: boolean = false;
  postId === travelPost._id ? (isSignlePost = true) : (isSignlePost = false);

  return (
    <>
      <Box>
        <Box component={Card}>
          <Carousel>
            {travelPost.image.map((img, idx) => (
              <img
                src={img}
                style={{ width: "100%", height: "260px", objectFit: "contain" }}
                alt={img}
                key={idx}
              />
            ))}
          </Carousel>
          <Box className="p-3">
            <Box>
              <Typography className={classes.titleText}>
                {travelPost.topic}
              </Typography>
              <Typography className={classes.descriptionText} marginBottom={3}>
                <span style={{ fontSize: "13px" }}>
                  Date : {travelPost.date}
                </span>
              </Typography>
              <Typography className={classes.descriptionText}>
                {isSignlePost ? (
                  travelPost.description
                ) : (
                  <>
                    {travelPost.description.slice(0, 150)}
                    {travelPost.description.length > 150 ? "......." : null}
                  </>
                )}
              </Typography>
            </Box>
            <CardHeader
              sx={{ padding: "0px", marginTop: "20px" }}
              avatar={
                <Avatar sx={{ width: 40, height: 40 }}>
                  {travelPost.userId.image && (
                    <img
                      src={travelPost.userId.image}
                      width="38px"
                      alt={travelPost.userId.fName}
                    />
                  )}
                </Avatar>
              }
              title={
                <Typography className={classes.titleText}>
                  {travelPost.userId.fName} {travelPost.userId.lName}
                </Typography>
              }
              subheader={
                <Typography
                  className={classes.descriptionText}
                  sx={{ "&.MuiTypography-root": { color: "#939393" } }}
                >
                  {getRole(travelPost.userId.role)}
                </Typography>
              }
            />
            <Box textAlign="right">
              {isSignlePost ? (
                <Button
                  variant="outlined"
                  onClick={() => history.push("/travel-post-list")}
                >
                  Back
                </Button>
              ) : (
                <Button variant="outlined" onClick={() => history.push(`/travel-post/${travelPost._id}`)}>
                  Show More
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TravelPost;
