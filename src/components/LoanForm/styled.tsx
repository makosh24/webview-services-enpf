import { styled } from "@mui/material/styles";


// export const DialogWrapper  = styled("div")(({ theme }) => ({
//   display: 'none',
//   '& > div': {
//     margin: 0
//   }
// }));

  export const Bottom = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
    [theme.breakpoints.down("md")]: {
      marginTop: 24,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
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
      fontWeight: 600,
      fontSize: '16px',
      color: '#3A3A3F',
    }
  }));

  export const Wrapper = styled("section")(({ theme }) => ({
    padding: '48px 0',
    background: '#F7F8FA',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',

    "& .inputWrapper": {
      marginBottom: '24px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '16px 0',
    }
  }));
  const returnButton = (theme: any) => ({
    "& .returnButton": {
      background: "#DEF7E8",
      borderRadius: "8px",
      padding: "16px 100px",
      [theme.breakpoints.down("md")]: {
        padding: "12px 25px",

      }
    },
    "& .returnButtonText": {
      color: "#145C33",
      fontSize: '16px',
      textTransform: 'none',
    },
  })
  export const Container = styled("div")(({ theme }) => ({
    ...returnButton(theme),
    '& .title': {
      fontSize: 40,
      marginBottom: '16px',
      [theme.breakpoints.down("md")]: {
        fontSize: 20,
      },
    },
    '& .subTitle': {
      fontSize: 20,
      marginBottom: '32px',

      [theme.breakpoints.down("md")]: {
        fontSize: 14,
        marginBottom: '24px',
      },
    },
    
    maxWidth: '900px',
    minWidth: '288px',

    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(118, 128, 147, 0.2)',
    borderRadius: '16px',
    [theme.breakpoints.down("md")]: {
      padding: '16px',
    }
  }));

  export const SuccessContainer = styled("div")(({ theme }) => ({
    ...returnButton(theme),
    padding: 40,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down("md")]: {
      padding: 24,

    },
    "& .succsessTitle": {
      fontSize: '32px',
      textAlign: 'center',
      margin: '24px 0 8px',
      [theme.breakpoints.down("md")]: {
        fontSize: '20px',
        margin: '20px 0 8px',

      },
    },

    "& .succsessSubTitle": {
      fontSize: '16px',
      margin: '8px 0 32px',
      [theme.breakpoints.down("md")]: {
        fontSize: '14px',
        margin: '8px 0 20px',

      },
    },

    "& .succsessTitleInfo": {
      fontSize: '24px',
      marginBottom: 24,
      [theme.breakpoints.down("md")]: {
        fontSize: '16px',
        marginBottom: 20,

      },
    },

    "& .succsessTextInfo": {
      fontSize: '16px',
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        fontSize: '12px',
        fontWeight: 400,
      },
    },

    "& .succsessTextInfo:not(:last-child)": {
      marginBottom: '26px',
      [theme.breakpoints.down("md")]: {
        marginBottom: '18px',

      },
    },


    
    "& .buttonWrapper": {
      marginTop: '48px',

      [theme.breakpoints.down("md")]: {
        marginTop: '32px',

      },
    },
    

  }));

  
  export const PrivatDataLabel = styled("div")(({ theme }) => ({
    margin: '32px 0 24px',
    fontWeight: 600,
    fontSize: 20,

  }));

  export const CheckboxArea = styled("div")(({ theme }) => ({
    '& div, & a': {
      fontSize: 16,
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
      },
    }

  }));

  export const BottomTextWrapper = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& .text_BottomText': {
      marginRight: '16px',
      width: 210,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 24,
    },

  }));
  
  



  

  
  