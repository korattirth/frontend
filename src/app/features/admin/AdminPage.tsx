import {Box,Grid,Card,CardContent,Typography,CardActions,CardHeader,Avatar,Switch,FormControlLabel,} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import { getRole } from "../../util/helper";
import EventLoader from "../../layout/Loader/EventLoader";

const AdminPage = () => {
  const { adminStore } = useStore();
  const { getUserList, userList, editUserStatus , test } = adminStore;

  useEffect(() => {
    getUserList();
  }, [adminStore, getUserList,test]);

  const handleChange = (userId: string) => {
    editUserStatus(userId);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} marginBottom={3} className="h-70" marginTop='95px'>
        <Grid container spacing={2}>
          {userList && userList.length > 0 ? userList.map((user, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#629549" }} aria-label="recipe">
                      {user.fName.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={
                    <Typography variant="h5" component="div">
                      {user.fName} {user.lName}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {getRole(user.role)}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">Email</span>: {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">Date Of Birth</span>:{" "}
                    {user.dob.split("T")[0]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">Zipcode</span>: {user.zipcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">City</span>: {user.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">State</span>: {user.state}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">Home Address</span>:{" "}
                    {user.homeAddress}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span className="fw-bold">Address</span>: {user.address2}
                  </Typography>
                </CardContent>
                <CardActions>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={user.isActive}
                        onChange={() => handleChange(user.userId)}
                      />
                    }
                    label={user.isActive ? 'Active' : 'Deactive'}
                  />
                </CardActions>
              </Card>
            </Grid>
          )) : <EventLoader />}
        </Grid>
      </Box>
    </>
  );
};

export default observer(AdminPage);
