import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

interface Props {
  errors: any;
}

const useStyles = makeStyles(() => ({
  errorText: {
    "&.MuiTypography-root": {
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: "Montserrat",
      color: "red",
      fontSize: "16px",
    },
  },
}));

const ValidationError = ({ errors }: Props) => {
  const classes = useStyles();
  return (
    //   <></>
    <div style={{marginTop : '20px'}}>
      {errors && (
        <>
          {errors.map((err: any, i: any) => (
            <Typography className={classes.errorText} key={i}>
              - {err.msg}
            </Typography>
          ))}
        </>
      )}
    </div>
  );
};

export default ValidationError;
