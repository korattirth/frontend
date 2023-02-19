import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const initialUserList: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "987-654-3210",
  },
  // Add more users as needed
];

const AdminPage = () => {
  const [userList, setUserList] = useState(initialUserList);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {userList.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {user.phone}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleEditClick(user)}>
                    Edit
                  </Button>
                  <Button size="small">Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleDialogClose}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>{/* Add your form elements here */}</DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default observer(AdminPage);
