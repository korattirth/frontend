import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react-lite";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
import { CreatePostModel } from "../../model/Post";
import { useStore } from "../../store/store";

const validationSchema = Yup.object({
  topic: Yup.string().required("Topic is Required"),
  date: Yup.string().required("Travel date is Required"),
  description: Yup.string()
    .required("Description is Required")
    .min(50, "Minimum 50 charter is Required"),
  file: Yup.array()
    .min(1, "At least one image is required")
    .max(5 , "You can add Maximum 5 Photos")
    .required("Image is Required"),
});

const useStyle = makeStyles((theme: Theme) => ({
  title: {
    "&.MuiTypography-root": {
      lineHeight: "63px",
      fontWeight: 600,
      fontFamily: "Roboto Slab",
      color: "#000000",
      fontSize: "48px",
      marginBottom: "43px",
      marginTop: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
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
  leftSideGrid: {
    padding: "40px",
    border: "1px solid #000000",
    borderRadius: "20px",
    marginBottom: "40px",
  },
  leftSideGridItem: {
    "&.MuiGrid-item": {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "30px",
      },
    },
  },
  perentDiv: {
    border: "1px solid #000000",
    borderRadius: "20px",
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
}));

export interface TravelModel {
  topic: string;
  file: File[] | null;
  description: string;
  date: string;
}

const CreateTravelPost = () => {
  const classes = useStyle();
  const [selectedFile, setSelectedFile] = useState<File[] | null>(null);

  const {
    travelStore: { createPost, loading },
  } = useStore();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length < 6) {
      let uploadedFiles = [];
      for (var i = 0; i < event.target.files.length; i++) {
        uploadedFiles.push(event.target.files[i]);
      }
      formik.setFieldValue("file", uploadedFiles);
      setSelectedFile(uploadedFiles);
    }
    else {
      formik.setFieldError('file','You Can Add Mamimum 5 Images')
    }
  };

  const resetForm = () => {
    formik.resetForm();
    setSelectedFile(null);
  };

  const formik = useFormik<TravelModel>({
    initialValues: {
      topic: "",
      description: "",
      date: "",
      file: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("topic", values.topic);
      formData.append("description", values.description);
      formData.append("date", values.date);
      for (let i = 0 ; i < values.file!.length ; i++) {
        formData.append("file", values.file![i]);
    }
      createPost(formData).then(() =>
        toast.success("Post created successfully!!")
      );
    },
  });

  return (
    <Box minHeight="80vh">
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography className={classes.title}>Create Travel Post</Typography>
          <Grid
            container
            component="form"
            onSubmit={formik.handleSubmit}
            className={classes.leftSideGrid}
          >
            <Grid item xs={12} sm={6} className={classes.leftSideGridItem}>
              <Box
                bgcolor="background.paper"
                borderRadius={2}
                border={1}
                p={2}
                height="100%"
                className={classes.perentDiv}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {selectedFile ? (
                      <>
                        <Typography>
                          {selectedFile.length} file is selected
                        </Typography>
                      </>
                    ) : (
                      <>
                        <input
                          accept="image/*"
                          multiple={true}
                          type="file"
                          id="imgInput"
                          hidden
                          onChange={handleFileSelect}
                        />
                        <label htmlFor="imgInput">
                          <CloudUploadIcon sx={{ fontSize: 80 }} />
                          <Typography variant="h6">File Upload</Typography>
                        </label>
                        {formik.errors.file ? (
                          <Typography className={classes.errorText}>
                            {formik.errors.file}
                          </Typography>
                        ) : null}
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box bgcolor="background.paper" p={2} height="100%">
                <TextField
                  name="topic"
                  value={formik.values.topic}
                  label="Topic"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                />
                {formik.errors.topic ? (
                  <Typography className={classes.errorText}>
                    {formik.errors.topic}
                  </Typography>
                ) : null}
                <TextField
                  name="date"
                  type="date"
                  value={formik.values.date}
                  label="Travel Date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  onChange={formik.handleChange}
                />
                {formik.errors.date ? (
                  <Typography className={classes.errorText}>
                    {formik.errors.date}
                  </Typography>
                ) : null}
                <TextField
                  name="description"
                  value={formik.values.description}
                  label="Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                />
                {formik.errors.description ? (
                  <Typography className={classes.errorText}>
                    {formik.errors.description}
                  </Typography>
                ) : null}
              </Box>
            </Grid>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              marginTop={5}
            >
              <LoadingButton
                variant="contained"
                type="submit"
                color="primary"
                sx={{ mr: 2 }}
                disabled={!formik.isValid || !formik.dirty}
                loading={loading}
              >
                Submit
              </LoadingButton>
              <Button
                onClick={() => resetForm()}
                variant="outlined"
                color="primary"
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default observer(CreateTravelPost);
