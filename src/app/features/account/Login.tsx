import { Box, Container, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/store";
import './MyCart.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "32px 0px",
    borderRadius: "10px",
    borderColor: "#1C343B",
    backgroundColor : '#ffffff'
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 250,
    margin: "0px 25px",
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
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be 5 character at minimum"),
});

function LogIn() {
  const classes = useStyles();
  const {
    userStore: { signIn, loading },
  } = useStore();

  const handleSignIn = (values: any) => {
    signIn(values).catch((err) => {
      console.log(err)
    });
  };

  return (
    <Container maxWidth="sm">
      <Box className={clsx(classes.root, "border")}>
        <div className={clsx(classes.centerContent, "mt-5 mb-4")}>
          <img src="./maggote_logo.png" width="20%" alt="logo" />
        </div>
        <Typography variant="h4" align="center" color="#606060">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSignIn(values)}
        >
          {({ handleSubmit, touched, errors, isValid, dirty }) => (
            <Form className={classes.form}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={
                  <ErrorMessage name="email" className={classes.error} />
                }
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                className="mt-3"
                error={touched.password && Boolean(errors.password)}
                helperText={
                  <ErrorMessage name="password" className={classes.error} />
                }
              />
              <LoadingButton
                loading={loading}
                type="submit"
                variant="contained"
                color="primary"
                className="my-4"
                disabled={!(isValid && dirty)}
              >
                Sign in
              </LoadingButton>
            </Form>
          )}
        </Formik>
        <Divider className={classes.divider} />
        <Typography textAlign="center" margin="20px 0px">
          New user?<Link to={"/sign-up"}>Register</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default observer(LogIn);
