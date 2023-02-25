import { observer } from "mobx-react-lite";
import Dropzone from "react-dropzone";
import { UploadFile } from '@mui/icons-material';
import { useCallback } from "react";
import { Typography } from "@mui/material";

const AppDropZone = (props: any) => {
    const { setFieldValue } = props;
  const dzStyles = {
    display: "flex",
    border: "dashed 3px #eee",
    borderColor: "#eee",
    borderRadius: "5px",
    paddingTop: "30px",
    alignItems: "center",
    height: 200,
    width: 500,
  };
  const dzActive = {
    borderColor: "green",
  };
  const onDrop = (acceptedFiles: any[]) => {
    acceptedFiles[0] = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0]),
    }); 
    setFieldValue("files", acceptedFiles[0]);
  };
  return (
    <>
      <div className="text-center mt-5">
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
            >
              <input {...getInputProps()} />
              <UploadFile sx={{fontSize: '100px'}} />
                <Typography variant='h4'>Drop image here</Typography>
            </div>
          )}
        </Dropzone>
      </div>
    </>
  );
};

export default observer(AppDropZone);
