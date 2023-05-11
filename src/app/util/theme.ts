import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a81c0c",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default : '#ffcc2c'
    }
  },
  typography: {
    "fontFamily": `Montserrat`,
   }
});

export default theme;
