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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  const { userStore, commonStore } = useStore();
  const { getCurrentUser } = userStore;
  const { token } = commonStore;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (token) {
      getCurrentUser().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [userStore, commonStore]);

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
            <Route path="/sign-in" element={<LogIn />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/user-list" element={<PrivateRoute component={AdminPage} roles = {Roles.Admin} />} />
            <Route path="/create-post" element={<PrivateRoute component={CreatePost} />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/user-details" element={<PrivateRoute component={UserDetails} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default observer(App);
