import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./app/layout/Footer";
import theme from "./app/util/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import LogIn from "./app/features/account/Login";
import Register from "./app/features/account/Register";
import AdminPage from "./app/features/admin/AdminPage";
import HomePage from "./app/features/home/HomePage";
import CreatePost from "./app/features/post/CreatePost";
import PostList from "./app/features/post/PostList";
import NotFound from "./app/layout/NotFound";
import { useEffect, useState } from "react";
import { useStore } from "./app/store/store";
import LoadingComponents from "./app/layout/LoadingComponents";
import { observer } from "mobx-react-lite";
import PrivateRoute from "./app/layout/PrivateRoute";
import { Roles } from "./app/util/shared";
import UserDetails from "./app/features/user/UserDetail";
import Navbar from "./app/layout/header/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CreateTravelPost from "./app/features/travel/CreateTravelPost";
import TravelPostList from "./app/features/travel/TravelPostList";
import SingleTravelPost from "./app/features/travel/SingleTravelPost";
import SinglePost from "./app/features/post/SinglePost";
import EventList from "./app/features/event/EventList";
import CreateEvent from "./app/features/event/CreateEvent";
import SingleEvent from "./app/features/event/SingleEvent";
import MyOrders from "./app/features/account/MyOrders";
import MyCart from "./app/features/account/MyCart";
import QueAns from "./app/features/contact/QueAns";
import SuggestedPeople from "./app/features/contact/SuggestedPeople";

function App() {
  const { userStore, commonStore } = useStore();
  const { getCurrentUser, user } = userStore;
  const { token } = commonStore;


  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (token) {
      getCurrentUser().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [userStore, commonStore, token, getCurrentUser]);

  if (loading) return <LoadingComponents message="Initialisin App..." />;
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar />
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            element={
              <Container sx={{ mt: 4 }}>
                <Outlet />
              </Container>
            }
          >
            {!user && (
              <>
                <Route path="/sign-in" element={<LogIn />} />
                <Route path="/sign-up" element={<Register />} />
              </>
            )}
            <Route path="/create-post" element={<PrivateRoute component={CreatePost} />}/>
            <Route path="/post-list" element={<PostList />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/create-travel-post" element={<PrivateRoute component={CreateTravelPost} roles={Roles.Admin} />} />
            <Route path="/travel-post-list" element={<TravelPostList />} />
            <Route path="/travel-post/:id" element={<SingleTravelPost />} />
            <Route
              path="/user-list"
              element={
                <PrivateRoute component={AdminPage} roles={Roles.Admin} />
              }
            />
            <Route
              path="/user-details"
              element={<PrivateRoute component={UserDetails} />}
            />
            <Route path="/create-event" element={<PrivateRoute component={CreateEvent} roles={Roles.Admin} />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="/event/:id" element={<SingleEvent />} />
            <Route path="/suggest" element={<PrivateRoute component={SuggestedPeople} />} />
            <Route path="/my-cart" element={<PrivateRoute component={MyCart} />} />
            <Route path="/orders" element={<PrivateRoute component={MyOrders} />} />
            <Route path="/que-ans" element={<PrivateRoute component={QueAns} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default observer(App);
