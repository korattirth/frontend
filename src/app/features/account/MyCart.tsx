import { observer } from "mobx-react-lite";
import { useStore } from "../../store/store";
import { Typography,Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function MyCart() {
  const {
    userStore: { user,getCurrentUser },
    eventStore: { eventPayment , removeEventToCart,addEventToCart},
  } = useStore();

  const handleCheckOut = () => {
    if (user && user.cart && user.cart.events){
      eventPayment(user!.cart.events);
    }
  };

  const removeEventFromCart = (eventId : string) => {
    removeEventToCart(eventId).then(() => {
      getCurrentUser();
    })
  }
  const addEventFromCart = (eventId : string) => {
    addEventToCart(eventId).then(() => {
      getCurrentUser();
    })
  }

  let total : number = 0;
  if (user && user.cart && user.cart.events) {
    user.cart.events.forEach(event => {
      total += event.quantity * event.eventId.price;
    })
  }

  return (
    user && (
      user.cart && user.cart.events && user.cart.events.length > 0 ? 
      <Box className='container' style={{marginTop:'95px',height: '80vh'}}>
        {user.cart.events.map((user,idx) => (
          <Box key={idx} className='row' style={{backgroundColor:'white',marginBottom: '10px',height : '150px'}}>
            <Box className='col-4 d-flex justify-content-center' style={{maxWidth:'100%',overflow : 'hidden',maxHeight:'100%'}}>
              <img src={user?.eventId?.image} alt={user?.eventId?.topic} style={{maxWidth: '100%',height:'100%',maxHeight:'100%'}} />
            </Box>
            <Box className='col-8 d-flex justify-content-center flex-column'>
              <Box>
                <Typography>{user?.eventId?.topic}</Typography>
                <Typography>Price : {user?.eventId?.price} $</Typography>
                <Typography>Date : {user?.eventId?.date}</Typography>
              </Box>
              <Box className="d-flex">
                <Button variant="outlined" style = {{marginRight:'10px'}} onClick={() => addEventFromCart(user.eventId._id)}><AddIcon /></Button>
                <Typography className ='d-flex align-items-center'>{user?.quantity}</Typography>
                <Button variant="outlined" style = {{marginLeft:'10px'}} onClick={() => removeEventFromCart(user.eventId._id)}><RemoveIcon /></Button>
              </Box>
            </Box>
          </Box>
        ))}
        <Box className='d-flex justify-content-between'>
          <Typography>Total Price : {total}$</Typography>
          <Button variant="contained" onClick={() => handleCheckOut()}>Check Out</Button>
        </Box>
      </Box> : 
    <>
      <Typography minHeight={'80vh'} style={{marginTop:'95px'}}fontSize={'40px'}>No Event here!</Typography>
    </>
    )
  );
}

export default observer(MyCart);
