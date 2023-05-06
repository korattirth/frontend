import { useEffect } from 'react';
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import clsx from "clsx";
import { useStore } from '../../store/store';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { history } from '../../..';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: "32px 0px",
        borderRadius: "10px",
        borderColor: "#1C343B",
        backgroundColor: '#ffffff'
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
    errorText: {
        "&.MuiTypography-root": {
          lineHeight: "normal",
          fontWeight: 500,
          fontFamily: "Montserrat Alternates",
          color: "red",
          fontSize: "12px",
        },
      },
});
const validationSchema = Yup.object().shape({
    user: Yup.string().required("Email is required"),
    suggestedStudents: Yup.string().required("Please select an option"),
    event: Yup.string().required("Please select an option"),
});

function SuggestedPeople() {

    const classes = useStyles();
    const { contactStore,userStore:{user} } = useStore();
    const { getStudentList, students,getEventList,events,postSuggestedStudent, loader } = contactStore;

    useEffect(() => {
        getStudentList();
        getEventList();
    }, [getStudentList,contactStore,getEventList])

    const handleSubmit = (values: any) => {
        postSuggestedStudent(values).then(() => {
            toast.success('Thank you for suggesting user')
            history.push('/');
        })
    }

    return (
        students && events && <Container maxWidth="sm" sx={{minHeight:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box className={clsx(classes.root, "border")}>
                <Typography variant="h4" align="center" color="#606060" className='mt-4 mb-3'>
                    Suggest People
                </Typography>
                <Formik
                    initialValues={{ user: user && user.fName && user.lName ? user.fName + ' ' + user.lName : '', suggestedStudents: "" ,event : ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ touched, errors, isValid, dirty, values, handleChange,handleBlur }) => (
                        <Form className={classes.form}>
                            <Field
                                as={TextField}
                                name="user"
                                label="User"
                                type="text"
                                variant="outlined"
                                disabled
                                fullWidth
                                error={touched.user && Boolean(errors.user)}
                                helperText={
                                    <ErrorMessage name="user" className={classes.error} />
                                }
                            />
                            <FormControl className ='mt-2' fullWidth error={touched.suggestedStudents && Boolean(errors.suggestedStudents)}>
                                <InputLabel id="suggestedStudents">
                                    Students
                                </InputLabel>
                                <Select
                                    labelId="suggestedStudents"
                                    id="demo-simple-select"
                                    label="Students"
                                    name="suggestedStudents"
                                    value={values.suggestedStudents}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error = {touched.suggestedStudents && Boolean(errors.suggestedStudents)}
                                >
                                    {students.map((student, idx) => (
                                        <MenuItem key={idx} value={student.userId}>{student.fName + ' ' + student.lName}</MenuItem>
                                    ))}
                                </Select>
                                {touched.suggestedStudents && errors.suggestedStudents ? (
                                    <Typography className={classes.errorText}>
                                        {errors.suggestedStudents}
                                    </Typography>
                                ) : null}
                            </FormControl>
                            <FormControl className ='mt-3' fullWidth error={touched.event && Boolean(errors.event)}>
                                <InputLabel id="event">
                                    Events
                                </InputLabel>
                                <Select
                                    labelId="event"
                                    id="demo-simple-select"
                                    label="Events"
                                    name="event"
                                    value={values.event}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error = {touched.event && Boolean(errors.event)}
                                >
                                    {events.map((event, idx) => (
                                        <MenuItem key={idx} value={event._id}>{event.topic}</MenuItem>
                                    ))}
                                </Select>
                                {touched.event && errors.event ? (
                                    <Typography className={classes.errorText}>
                                        {errors.event}
                                    </Typography>
                                ) : null}
                            </FormControl>
                            <LoadingButton
                                  loading={loader}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="my-4"
                                disabled={!(isValid && dirty)}
                            >
                                Suggest
                            </LoadingButton>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}

export default observer(SuggestedPeople)