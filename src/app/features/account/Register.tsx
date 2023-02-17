import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Theme } from "@mui/system";
import { User } from "../../model/User";
import { useStore } from "../../store/store";
import { ragisterFormValidation, initialValues } from "../../util/helper";
import { observer } from "mobx-react-lite";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Montserrat:wght@100;400&display=swap');
</style>;

const useStyles = makeStyles((theme : Theme) => ({
  root: {
    flexGrow: 1,
    margin: "32px 0px",
    borderRadius: "10px",
    borderColor: "#1C343B",
    // [theme.breakpoints.up('xl')]: {
    //   width : '750px'
    // }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 670,
    margin: "0px 25px",
  },
  input: {
    margin: "16px 0",
  },
  error: {
    color: "red",
    marginTop: 4,
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Montserrat Alternates",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "29px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#1C343B",
    width: "100%",
  },
}));

const validationSchema = Yup.object(ragisterFormValidation());

function Register() {
  const classes = useStyles();
  const { userStore : {signUp} } = useStore();

  const handleSignUp = (values: User) => {
    signUp(values);
  };

  return (
    <Container style={{display : 'flex',justifyContent : 'center'}}>
      <Box className={clsx(classes.root, "border")}>
        <div className={clsx(classes.centerContent, "mt-5 mb-4")}>
          <img src="./The TS High School.png" width="60%" alt="logo" />
        </div>
        <Typography variant="h4" align="center" color="#606060" gutterBottom>
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ touched, errors, isValid, dirty }) => (
            <Form className={classes.form}>
              <Grid container spacing={2} sx={{marginBottom : '16px'}}>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="fName"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.fName && Boolean(errors.fName)}
                    helperText={
                      <ErrorMessage name="fName" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="lName"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.lName && Boolean(errors.lName)}
                    helperText={
                      <ErrorMessage name="lName" className={classes.error} />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{marginBottom : '16px'}}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.email && Boolean(errors.email)}
                    helperText={
                      <ErrorMessage name="email" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.password && Boolean(errors.password)}
                    helperText={
                      <ErrorMessage name="password" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      <ErrorMessage
                        name="confirmPassword"
                        className={classes.error}
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="homeAddress"
                    label="Home Address"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.password && Boolean(errors.homeAddress)}
                    helperText={
                      <ErrorMessage
                        name="homeAddress"
                        className={classes.error}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} >
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="address2"
                    label="Address"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.address2 && Boolean(errors.address2)}
                    helperText={
                      <ErrorMessage name="address2" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="zipcode"
                    label="Zipcode"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.zipcode && Boolean(errors.zipcode)}
                    helperText={
                      <ErrorMessage name="zipcode" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.city && Boolean(errors.city)}
                    helperText={
                      <ErrorMessage name="city" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.state && Boolean(errors.state)}
                    helperText={
                      <ErrorMessage name="state" className={classes.error} />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="department"
                    label="Department"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.department && Boolean(errors.department)}
                    helperText={
                      <ErrorMessage
                        name="department"
                        className={classes.error}
                      />
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Field
                    as={TextField}
                    name="dob"
                    label="Dato Of Birth"
                    type="date"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    error={touched.dob && Boolean(errors.dob)}
                    helperText={
                      <ErrorMessage name="dob" className={classes.error} />
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="my-4"
                disabled={!(isValid && dirty)}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
        <Divider className={classes.divider} />
        <Typography textAlign="center" margin="20px 0px">
        Have an account?<Link to={"/sign-in"}>Sign-In</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default observer(Register)
