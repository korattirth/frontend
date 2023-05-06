import { observer } from "mobx-react-lite"
import { useStore } from "../../store/store";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { AccordionDetails, TextField, Typography, AccordionActions } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

interface Props{
    questionId: string,
    answer: string;
}

const useStyles = makeStyles({
    errorText: {
      "&.MuiTypography-root": {
        lineHeight: "normal",
        fontWeight: 500,
        fontFamily: "Montserrat Alternates",
        color: "red",
        fontSize: "12px",
      },
    },
  })

const MyForm = ({questionId,answer}: Props) => {

    const classes = useStyles();

    const { contactStore } = useStore();
    const { postAnswer,loading } = contactStore;

    const validationSchemaForAns = Yup.object().shape({
        answer: Yup.string()
            .required("Answer is required")
            .min(20, 'Answer should be minimum 20 character')
    });

    const formikForAns = useFormik({
        initialValues: {
            answer: answer
        },
        validationSchema: validationSchemaForAns,
        onSubmit: (id) => handleSubmit(id)
    });

    const handleSubmit = (questionId: any) => {
        postAnswer(formikForAns.values, questionId).then(() => {
            toast.success('Answer submit successfully')
        })
    };

    return (
        <>
            <form>
                <AccordionDetails>
                    <TextField fullWidth label="Answer" value={formikForAns.values.answer} multiline name='answer' onChange={formikForAns.handleChange} error={formikForAns.touched.answer && Boolean(formikForAns.errors.answer)}
                        rows={3} />
                    {formikForAns.errors.answer ? (
                        <Typography className={classes.errorText}>
                            {formikForAns.errors.answer}
                        </Typography>
                    ) : null}
                </AccordionDetails>
                <AccordionActions>
                    <LoadingButton loading={loading === questionId} variant='contained' disabled={!formikForAns.isValid || !formikForAns.dirty} onClick={() => handleSubmit(questionId)}>Submit</LoadingButton>
                </AccordionActions>
            </form>
        </>
    )
}

export default observer(MyForm)