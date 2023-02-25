import { Box, Button, Grid, Typography } from "@mui/material";
import { history } from "../..";

function NotFound() {
  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }} >
      <Grid container spacing={2} display='flex' justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img
              src="https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"
              alt="404"
              width={200}
              height={200}
            />
          </Box>
          <Typography variant="h4" align="center">
            404 - Page not found
          </Typography>
          <Typography variant="body1" align="center">
            The page you are looking for does not exist.
          </Typography>
          <Button onClick={() => history.push("/")} variant="contained" fullWidth>Go Back To Home</Button>
        </Grid> 
      </Grid>
    </Box>
  );
}

export default NotFound;
