import { styled } from "@mui/material/styles";

  export const Bottom = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
  }));

  export const Fields = styled("div")(({ theme }) => ({
    "& > *": {
      marginBottom: '16px'
    }
  }));

  export const SumWrapper = styled("div")(({ theme }) => ({
    padding: '16px',
    backgroundColor: '#F4F5F6',
    display: 'flex',
    '& > *': {
      marginRight: '20px',
    }
  }));

  export const Wrapper = styled("div")(({ theme }) => ({
    padding: '72px',
    background: '#F7F8FA',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  }));

  export const Container = styled("div")(({ theme }) => ({
    '& .returnButtonText': {
      textTransform: 'none',
    },
    '& .title': {
      fontSize: 32,
      margin: '24px 0 8px',
      [theme.breakpoints.down("md")]: {
        fontSize: 20,
        margin: '20px 0 8px',

      }
    },
    '& .subTitle': {
      fontSize: 16,
      margin: '8px 0 24px',
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
        margin: '8px 0 20px',
      },
    },
    maxWidth: '900px',
    minWidth: '288px',

    padding: '40px',
    [theme.breakpoints.down("md")]: {
      padding: '24px',

    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(118, 128, 147, 0.2)',
    borderRadius: '16px',
    "& button": {
      background: '#DEF7E8',
      padding: '16px 100px',
      fontSize: '16px',
      color: '#145C33',
      [theme.breakpoints.down("md")]: {
        padding: "12px 25px",
      }
    },
  }));



  

  
  