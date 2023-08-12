import { Accordion, AccordionSummary, Typography, AccordionDetails, Button, FormControl, Modal, Box, TextField, InputLabel, MenuItem, Select, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useStore } from '../../store/store';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react-lite';
import { Roles } from '../../util/shared';
import MyForm from './MyForm';
import LoadingButton from "@mui/lab/LoadingButton";
import EventLoader from '../../layout/Loader/EventLoader';

function QueAns() {

  const { contactStore, userStore: { user } } = useStore();
  const { questions, getQuestions, postQuestion , getQuestionsForAdmin, loader } = contactStore;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down(500));

  useEffect(() => {
    user && user.role === Roles.Admin ? getQuestionsForAdmin() :  getQuestions(); 
  }, [contactStore, getQuestions,getQuestionsForAdmin])

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMd ? 280 : 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validationSchema = Yup.object().shape({
    question: Yup.string()
      .required("Questions is required")
      .min(20, 'Questions should be minimum 15 character'),
    questionType: Yup.string()
      .required("Questions type is required")
  });

  const formik = useFormik({
    initialValues: {
      question: "",
      questionType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postQuestion(values).then(() => {
        getQuestions()
        handleClose();
        toast.success('Question add successfully!')
      })
    },
  });

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };


  return (
    <>
      <Box textAlign='right' marginBottom={1} marginTop='95px'>
        <Button variant='outlined' onClick={handleOpen}>Add Question</Button>
      </Box>
      
      <Box minHeight='70vh'>
        {questions && questions.length > 0 ? questions.map((faq: any, index: number) => (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                {user && (user.role === Roles.Customer || user.role === Roles.ServiceProvider) &&
                <AccordionDetails>
                  {faq.answer ? <Typography>{faq.answer}
                  </Typography> : <Typography>Thank you for contact us. <br /> Our team give you answer as soon as possible</Typography>}
                </AccordionDetails>
                }
                {user && user.role === Roles.Admin &&
                <>
                  <MyForm questionId={faq._id} answer={faq.answer} key={index}/>
                </>}
              </Accordion>
          )) : <EventLoader />}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          onClick: handleBackdropClick,
        }}
      >
        <Box sx={style}>
          <Box textAlign='right' marginTop='0px'>
            <IconButton onClick={handleClose}><DisabledByDefaultRoundedIcon /></IconButton>
          </Box>
          <Box className='p-4 pt-0'>
            <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='15px'>
              Add Your Question
            </Typography>
            <Box display='flex' flexDirection='column' component='form'>
              <TextField label="Question" multiline name='question' onChange={formik.handleChange} error={formik.touched.question && Boolean(formik.errors.question)}
                rows={3} />
              {formik.errors.question ? (
                <Typography className={classes.errorText}>
                  {formik.errors.question}
                </Typography>
              ) : null}
              <FormControl className='mt-2'>
                <InputLabel id="type">Type</InputLabel>
                <Select
                  labelId="type"
                  value={formik.values.questionType}
                  onChange={formik.handleChange}
                  label="Type"
                  name='questionType'
                  error={formik.touched.question && Boolean(formik.errors.questionType)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Feedback'>Feedback</MenuItem>
                  <MenuItem value='Ask for Creator'>Ask for Creator</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>
              {formik.errors.questionType ? (
                <Typography className={classes.errorText}>
                  {formik.errors.questionType}
                </Typography>
              ) : null}
              <LoadingButton loading={loader} className='mt-2' disabled={!formik.isValid || !formik.dirty} variant='contained' onClick={() => formik.handleSubmit()}>Submit</LoadingButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default observer(QueAns)