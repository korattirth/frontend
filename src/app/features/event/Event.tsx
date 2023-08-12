import { Avatar, Box, Card, CardHeader, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { getRole } from "../../util/helper";
import { EventModel } from "../../model/Post";
import Button from "@mui/material/Button";
import { history } from "../../..";
import { observer } from "mobx-react-lite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoadingButton from "@mui/lab/LoadingButton";
import { useStore } from "../../store/store";
import { toast } from "react-toastify";

interface Props {
  event: EventModel;
  eventId?: string;
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

const Event = ({ event, eventId }: Props) => {
  const classes = useStyles();
  var isSignlePost: boolean = false;
  eventId === event._id ? (isSignlePost = true) : (isSignlePost = false);

  const {userStore : {addEventToCart,loadAddCart,getCurrentUser,user} } = useStore();

  const handleAddToCart = (eventId : string) => {
    if(user){
      addEventToCart(eventId).then(() => {
        getCurrentUser();
        toast.success("Event added into cart")
      })
    }
    else{
      history.push('/sign-in')
    }
  }

  return (
    <>
      <Box>
        <Box component={Card} width="100%" sx={{ position: "relative" }}>
          <Chip
            label={event.price === 0 ? "Free" : event.price + " $"}
            sx={{
              borderRadius: "5px",
              position: "absolute",
              top: "2%",
              left: "2%",
              width: "70px",
            }}
            color="primary"
          />

          <img
            src={event.image}
            style={{ width: "100%", height: "250px", objectFit: "contain" }}
            alt={event.image}
          />
          <Box className="p-3">
            <Box>
              <Typography className={classes.titleText}>
                {event.topic}
              </Typography>
              <Typography className={classes.descriptionText} marginBottom={3}>
                <span style={{ fontSize: "13px" }}>Date : {event.date}</span>
              </Typography>
              <Typography className={classes.descriptionText}>
                <b>Event Type </b>: {event.type}
              </Typography>
              <Typography className={classes.descriptionText}>
                {isSignlePost ? event.description : null}
              </Typography>
            </Box>
            <CardHeader
              sx={{ padding: "0px", marginTop: "20px" }}
              avatar={
                <Avatar sx={{ width: 40, height: 40 }}>
                  {event.userId.image && (
                    <img
                      src={event.userId.image}
                      width="38px"
                      alt={event.userId.fName}
                    />
                  )}
                </Avatar>
              }
              title={
                <Typography className={classes.titleText}>
                  {event.userId.fName} {event.userId.lName}
                </Typography>
              }
              subheader={
                <Typography
                  className={classes.descriptionText}
                  sx={{ "&.MuiTypography-root": { color: "#939393" } }}
                >
                  {getRole(event.userId.role)}
                </Typography>
              }
            />
            <Box textAlign="center" marginTop={3}>
              {isSignlePost ? (
                <Button
                  variant="outlined"
                  onClick={() => history.push("/event-list")}
                >
                  Back
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => history.push(`/event/${event._id}`)}
                >
                  Read More
                </Button>
              )}
              <LoadingButton
                loading={loadAddCart === event._id}
                variant="outlined"
                startIcon={<AddShoppingCartIcon />}
                  onClick={() => handleAddToCart(event._id)}
                >
                  Add To Cart
                </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default observer(Event);
