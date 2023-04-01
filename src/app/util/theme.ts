import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#629549",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default : '#f4f4f4'
    }
  },
  typography: {
    "fontFamily": `Montserrat`,
   }
});

export default theme;
