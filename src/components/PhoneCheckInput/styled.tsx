import { styled } from "@mui/material/styles";

  export const Wrapper = styled("div")(({ theme }) => ({
    height: '64px',
    position: 'relative',
    [theme.breakpoints.down("md")]: {

    },

    "& input": {
      fontSize: '16px',
      lineHeight: 0,
      padding: '30px 16px 10px',

    },

    "& input::placeholder": {
      // fontSize: '16px',
      [theme.breakpoints.down("md")]: {
        // fontSize: '14px',

      },
    }
  }));

  export const PlaceholderCustom = styled("div")(({ theme }) => ({
    color: '#676E79',
    fontSize: '12px',
    position: 'absolute',
    margin: '8px 20px',
    [theme.breakpoints.down("md")]: {

    },

    "& input": {
    },

    // "& input::placeholder": {
    //   // fontSize: '16px',
    //   [theme.breakpoints.down("md")]: {
    //     // fontSize: '14px',

    //   },
    // }
  }));
  




  

  
  