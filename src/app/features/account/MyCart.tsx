import { observer } from "mobx-react-lite";
import { useStore } from "../../store/store";
import { Typography } from "@mui/material";

function MyCart() {
  const {
    userStore: { user,getCurrentUser },
    eventStore: { eventPayment , removeEventToCart},
  } = useStore();

  const handleCheckOut = () => {
    eventPayment(user!.cart.events);
  };

  const removeEventFromCart = (eventId : string) => {
    removeEventToCart(eventId).then(() => {
      getCurrentUser();
    })
  }

  let total : number = 0;
  if (user) {
    user.cart.events.forEach(event => {
      total += event.quantity * event.eventId.price;
    })
  }

  return (
    user && (
      user.cart && user.cart.events && user.cart.events.length > 0 ? <>
      <div className="container bg-white rounded-top mt-5" id="zero-pad">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-12 pt-3">
            <div className="d-flex flex-column pt-4 pb-2">
              <div>
                <h5 className="text-uppercase font-weight-normal">
                  shopping bag
                </h5>
              </div>
              <div className="font-weight-normal">
                {user.cart.events.length} Events in your cart
              </div>
            </div>
            <div
              className="d-flex flex-row px-lg-5 mx-lg-5 mobile"
              id="heading"
            >
              <div className="px-lg-5 mr-lg-5" id="produc">
                PRODUCTS
              </div>
              <div className="px-lg-5 ml-lg-5" id="prc">
                PRICE
              </div>
              <div className="px-lg-5 ml-lg-1" id="quantity">
                QUANTITY
              </div>
              <div className="px-lg-5 ml-lg-3" id="total">
                TOTAL
              </div>
            </div>
            {user.cart.events.length > 0
              ? user.cart.events.map((event, idx) => (
                  <div
                    className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile"
                    key={idx}
                  >
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={event.eventId.image}
                          width="150"
                          height="150"
                          alt=""
                          id="image"
                        />
                      </div>
                      <div className="d-flex flex-column pl-md-3 pl-1">
                        <div>
                          <h6>{event.eventId.topic}</h6>
                        </div>
                        <div>
                          Event Date:
                          <span className="pl-3">{event.eventId.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pl-md-0 pl-1">
                    <b>$ {event.eventId.price }</b>
                    </div>
                    <div className="pl-md-0 pl-2">
                      <span className="fa fa-minus-square text-secondary"></span>
                    <span className="px-md-3 px-1">{event.quantity }</span>
                      <span className="fa fa-plus-square text-secondary"></span>
                    </div>
                    <div className="pl-md-0 pl-1">
                    <b>$ { event.quantity * event.eventId.price}</b>
                    </div>
                    <div className="close" style={{cursor:'pointer'}} onClick={() => removeEventFromCart(event.eventId._id)}>&times;</div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="container bg-light rounded-bottom py-4" id="zero-pad">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="px-md-0 px-1" id="footer-font">
                <b className="pl-md-4">
                  SUBTOTAL<span className="pl-md-4">${total}</span>
                </b>
              </div>
              <div>
                <button onClick={() => handleCheckOut()} className="btn btn-sm bg-dark text-white px-lg-5 px-3">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> : 
    <>
      <Typography minHeight={'80vh'} fontSize={'40px'}>No Event here!</Typography>
    </>
    )
  );
}

export default observer(MyCart);
