import React from "react";
import { Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export interface Props {
  firstValue?: number;
  title?: string;
  from?: string;
  to?: string;
  setValue?: (value: any) => void;
  max?: number;
  min?: number;
  step?: number;
  value?: number | string;
  number?: number;
  setNumber?: React.Dispatch<React.SetStateAction<number>>;
}

const StyledSlider = styled("section")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: 5,
    "& input": {
      paddingLeft: "30px",
    },

    "& .box": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      "& span": {
        width: "fit-content",
      },
    },

    "& MuiSlider-root": {
      height: "4px",
      padding: "10px 0",
    },
  },

  [theme.breakpoints.up("md")]: {
    "& .box": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      "& span": {
        width: "fit-content",
      },
    },
  },
}));
const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#FFFFFF !important",
      paddingLeft: "17px",
      fontSize: 16,
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderBottom: '0',
      borderRadius: '4px',
      marginTop: 8,

      "& input": {
        padding: 0,
        fontWeight: 700,
        height: 56,
      },
    },
  },

  title: {
    color: '#768093',
    fontSize: 16,
    [theme?.breakpoints?.down("md")]: {
      fontSize: 14,
    },
  },
  fromTo: {
    fontSize: 14,
    color: '#6D7986',
  },

}));
export const CustomSlider: React.FC<Props> = ({
  min,
  max,
  step,
  from,
  to,
  value,
  setValue,
  title,
}) => {
  const classes = useStyles();
  const onHandleChange = (event: any) => {
    let value = event.target.value;
    if(typeof(value) === 'string') {
      value = value.replaceAll(/\D/g, '')
    }
    setValue?.(value)
  };

  const handleBlur = () => {
    if((value && min && max)){
      if(+value < +min) setValue?.(+min)
      if(+value > +max) setValue?.(+max)
    }
  }
  const res = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <StyledSlider>
      <Typography fontWeight={400} className={classes.title} textAlign={"left"}>
        {title}
      </Typography>
      <TextField
        className={classes.root}
        variant="filled"
        value={`${res} ₸` || `${min} ₸`}
        onChange={onHandleChange}
        onBlur={handleBlur}
        fullWidth
        InputProps={{ disableUnderline: true }}
        // border='1px solid black'
      />
      <Slider
        sx={{
          margin: "-20px 0 0 0 !important",
          "& span": {
            background: "#27AE60",
            color: "#27AE60",
          },
        }}
        value={Number(value) || min}
        min={min}
        max={max}
        step={step}
        onChange={onHandleChange}
      />
      <Box className="box">
        <span className={classes.fromTo}>{from}</span>
        <span className={classes.fromTo}>{to} </span>
      </Box>
    </StyledSlider>
  );
};
