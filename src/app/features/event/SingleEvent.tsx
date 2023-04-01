import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/store";
import Event from "./Event";

const SingleEvent = () => {
  const {
    eventStore: { event, getEvent, clearSelectedEvent },
  } = useStore();
  const { id } = useParams();

  useEffect(() => {
    getEvent(id!);

    return () => clearSelectedEvent();
  }, [getEvent, id, clearSelectedEvent]);
  return (
    <>
      <Container sx={{ marginBottom: "20px" }}>
        {event && <Event event={event} eventId={id} />}
      </Container>
    </>
  );
};

export default observer(SingleEvent);
