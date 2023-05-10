import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import AccordionLayout from "./AccordionLayout";
import { useStore } from "../../store/store";
import Box from "@mui/material/Box";

function MyOrders() {
  const {
    userStore: { orders, getMyOrders },
  } = useStore();

  useEffect(() => {
    getMyOrders();
  }, [getMyOrders]);

  return (
    <>
      <Box minHeight='80vh'>
      {orders &&
        orders.map((order) => (
          <AccordionLayout order={order} key={order._id} />
        ))}
      </Box>
    </>
  );
}

export default observer(MyOrders);
