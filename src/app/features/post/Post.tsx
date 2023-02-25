import {
  Avatar,
  Box,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { observer } from "mobx-react-lite";
import { PostModel } from "../../model/Post";
import { getRole } from "../../util/helper";

interface Props {
  post : PostModel
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
      borderBottom : '1px solid #000000',
      borderLeft : '1px solid #000000',
      borderRight: '1px solid #000000',
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
      wordWrap : 'break-Word'
    },
  },
}));

const Post = ({post} : Props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classes.imageContainer} maxHeight='350px'>
        <img
          src={post.image}
          alt="placeholder"
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        className={classes.description}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        maxHeight='350px'
      >
        <Box>
          <Typography className={classes.titleText} marginBottom={3}>
            {post.topic} 
          </Typography>
          <Typography className={classes.descriptionText}>
            {post.description.substr(0,200)} ........................
          </Typography>
        </Box>
        <CardHeader
          sx={{ padding: "0px", marginTop: "20px" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.fName.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={
            <Typography className={classes.titleText}>
              {post.fName} {post.lName}
            </Typography>
          }
          subheader={
            <Typography
              className={classes.titleText}
              sx={{ "&.MuiTypography-root": { color: "#939393" } }}
            >
              {getRole(post.role)}
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
};

export default observer(Post);
