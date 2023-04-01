import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import { observer } from "mobx-react-lite";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Orders } from "../../model/User";

interface Props {
  order: Orders;
}

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: "110px",
    objectFit: "fill",
    [theme.breakpoints.down(500)]: {},
  },
  titleText: {
    "&.MuiTypography-root": {
      lineHeight: "28px",
      fontWeight: 400,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "24px",
    },
  },
  descriptionText: {
    "&.MuiTypography-root": {
      lineHeight: "20px",
      fontWeight: 400,
      color: "#000000",
      fontSize: "16px",
      wordBreak: "break-all",
    },
  },
  perentDiv: {
    display: "flex",
    [theme.breakpoints.down(390)]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  div1: {
    flex: 1,
    textAlign: "center",
    [theme.breakpoints.down(580)]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down(390)]: {
      marginRight: "0px",
      marginBottom: "20px",
    },
  },
  div2: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

function AccordionLayout({ order }: Props) {
  const classes = useStyles();
  return (
    <div style={{marginTop : '20px'}}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box>
            <Typography className={classes.titleText}>
              {order.eventId.topic}
            </Typography>
            <Typography className={classes.descriptionText}>
              Order Date - {order.createdAt.split("T")[0]}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.perentDiv}>
            <div className={classes.div1}>
              <img
                src={order.eventId.image}
                className={classes.image}
                alt={order.eventId.topic}
              />
            </div>
            <div className={classes.div2}>
              <Typography className={classes.descriptionText}>
                <b>OrderId</b> : {order._id}
              </Typography>
              <Typography className={classes.descriptionText}>
                <b>Event Name</b> : {order.eventId.topic}
              </Typography>
              <Typography className={classes.descriptionText}>
                <b>Event Date</b> : {order.eventId.date}
              </Typography>
              <Typography className={classes.descriptionText}>
                <b>Event Type</b> : {order.eventId.type}
              </Typography>
            </div>
          </div>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained" sx = {{fontFamily : "Montserrat"}}>Download</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default observer(AccordionLayout);
