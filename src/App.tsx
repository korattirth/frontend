import "./App.css";
import Navbar from "./app/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./app/layout/Footer";
import theme from "./app/util/theme";
import { ThemeProvider } from "@mui/material";
import LogIn from "./app/features/account/Login";
import Register from "./app/features/account/Register";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/sign-in" element={<LogIn />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
