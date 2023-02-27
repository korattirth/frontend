import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useStore } from "../../store/store";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { observer } from "mobx-react-lite";
import {
  editUserFormValidation,
  editUserInitialValue,
} from "../../util/helper";
import { toast } from "react-toastify";

const useStyle = makeStyles((theme: Theme) => ({
  leftGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  title: {
    "&.MuiTypography-root": {
      lineHeight: "63px",
      fontWeight: 600,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "48px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
  },
  imageButton: {
    color: "#629549",
    width: "100%",
    minHeight: "30px",
    textAlign: "center",
    border: "1px solid #629549",
    borderRadius: "5px",
    marginTop: "20px",
    cursor: "pointer",
  },
}));

const UserDetails = () => {
  const classes = useStyle();
  const {
    userStore: { user, editUser, loading, uploadUserImage, imgBtnLoading },
  } = useStore();
  const [edit, setEdit] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleEditSubmit = (value: any) => {
    editUser(value, user?.userId!).then(() => {
      toast.success('User-update Successfully!!')
      setEdit(true);
    })
  };

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("file", values.file!);
      uploadUserImage(formData, user?.userId!).then(() => {
        setSelectedFile(null);
        toast.success('Image Upload successfully!!')
      });
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      formik.setFieldValue("file", event.target.files[0]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12} textAlign="center">
          <Typography className={classes.title}>Profile</Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.leftGrid}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              {selectedFile ? (
                <CardMedia
                  component="img"
                  height="194"
                  image={URL.createObjectURL(selectedFile)}
                  alt="Paella dish"
                  sx={{ objectFit: "contain" }}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    user?.image
                      ? user.image
                      : "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
                  }
                  alt="Paella dish"
                  sx={{ objectFit: "contain" }}
                />
              )}
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="file"
                  id="image"
                  onChange={handleFileSelect}
                  hidden
                />
                {!selectedFile ? (
                  <label htmlFor="image" className={classes.imageButton}>
                    <Typography component={"div"}>Change Image</Typography>
                  </label>
                ) : (
                  <LoadingButton
                    type="submit"
                    className={classes.imageButton}
                    sx={{ height: "30px" }}
                    loading={imgBtnLoading}
                  >
                    Upload
                  </LoadingButton>
                )}
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} display="flex" justifyContent="center">
          <Card sx={{ maxWidth: 800 }}>
            <CardContent>
              <Typography
                component="div"
                sx={{ mb: 2 }}
                display="flex"
                justifyContent="end"
              >
                <Button variant="contained" onClick={() => setEdit(!edit)}>
                  {edit ? "Edit" : "Cancel"}
                </Button>
              </Typography>
              <Formik
                initialValues={editUserInitialValue(user)}
                validationSchema={Yup.object(editUserFormValidation())}
                onSubmit={(values) => handleEditSubmit(values)}
              >
                {({ touched, errors, handleSubmit, dirty, isValid }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      as={TextField}
                      name="fName"
                      label="First Name"
                      type="text"
                      variant="outlined"
                      fullWidth
                      disabled={edit}
                      // className={classes.input}
                      error={touched.fName && Boolean(errors.fName)}
                      helperText={<ErrorMessage name="fName" />}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="lName"
                      label="Last Name"
                      error={touched.lName && Boolean(errors.lName)}
                      helperText={<ErrorMessage name="lName" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={true}
                      label="Email"
                      value={user?.email}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="dob"
                      label="Date of birth"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={touched.dob && Boolean(errors.dob)}
                      helperText={<ErrorMessage name="dob" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="homeAddress"
                      label="Home Address"
                      error={touched.homeAddress && Boolean(errors.homeAddress)}
                      helperText={<ErrorMessage name="homeAddress" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="address2"
                      label="Address"
                      error={touched.address2 && Boolean(errors.address2)}
                      helperText={<ErrorMessage name="address2" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="zipcode"
                      label="Zipcode"
                      error={touched.zipcode && Boolean(errors.zipcode)}
                      helperText={<ErrorMessage name="zipcode" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      name="city"
                      label="City"
                      error={touched.city && Boolean(errors.city)}
                      helperText={<ErrorMessage name="city" />}
                      sx={{ mt: 2 }}
                    />
                    <Field
                      as={TextField}
                      fullWidth
                      disabled={edit}
                      id="address"
                      name="state"
                      label="State"
                      error={touched.state && Boolean(errors.state)}
                      helperText={<ErrorMessage name="state" />}
                      sx={{ mt: 2 }}
                    />
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                      <LoadingButton
                        loading={loading}
                        disabled={edit || !(isValid && dirty)}
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </LoadingButton>
                    </Box>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default observer(UserDetails);
