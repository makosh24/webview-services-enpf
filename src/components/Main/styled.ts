import { styled } from "@mui/material/styles";

export const Banner = styled("div")(({ theme }) => ({
  width: '100%',

  '& .imageBanner': {
    objectFit: 'contain',
    position: 'relative',

    [theme.breakpoints.up("md")]: {
      maxHeight: '358px',
      top: -20,
    },
    [theme.breakpoints.down("md")]: {
      width: '100%',    
    },
  },
  '& .ButtonMobile': {
    display: 'none',
  },

  '& .ButtonDesktop': {
    // margin: '32px auto',
    width: 343,
  },

  [theme.breakpoints.down("md")]: {
  
    padding: theme.spacing(1),
    '& .ButtonDesktop': {
      display: 'none',
      margin: '32px auto',
    },
    '& .ButtonMobile': {
      display: 'block',
      margin: '32px auto',
    },
  },
  [theme.breakpoints.up("md")]: {
    position: "relative",
    paddingTop: "90px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "90px 0 0 0 ",
  },

  backgroundSize: "50%",
}));

export const BannerWrapper = styled("section")(({ theme }) => ({
  '& .titleText': {
    maxWidth: 462,
    marginBottom: 110,
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    }
  },
  '& .title': {
    fontSize: 48,
    marginBottom: 24,
    fontWeight: 600,
    lineHeight: '56px',
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      marginBottom: 8,
      lineHeight: '28px',

    }
  },
  '& .subTitle': {
    fontSize: 20,
    marginBottom: 32,

    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      marginBottom: 0,

    }
  },
  
  [theme.breakpoints.down("md")]: {
    width: "100%",
    "& div": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& h4": {
        textAlign: "center",
        wordBreak: "break",
        width: "100%",
      },
      "& p": {
        // textAlign: "center",
        width: "100%",
      },
      "& a": {
        margin: "0 auto",
        "& button": {
          height: "40px",
          padding: 0,
        },
      },
    },
    "& img": {  
      margin: '24px auto',
      display: 'block'
    },
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 auto",
    display: 'flex',
    justifyContent: 'space-between',

  },
  [theme.breakpoints.up("xl")]: {
    display: "flex",
    "& div": {},
    "& img": {
      position: "relative",
      bottom: -34,
      right: 0,
    },
  },
}));

export const BannerShields = styled("section")(({ theme }) => ({
  width: '100%',
  marginBottom: 72,
  [theme.breakpoints.down("md")]: {
    marginBottom: 0,
    display: "flex",
    // flexDirection: "column",
    flexWrap: 'wrap',

    "& .shieldItem": {
      marginBottom: 32,
    },
  },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
 
    "& div": {
      display: "flex",
      alignItems: "center",
      width: 265,
      "& img": {
        marginRight: 16,
      },
      "& p": {
        display: "flex",
        flexDirection: "column",

      },
      "& .shieldItemTitle": {
        fontSize: 20,
        fontWeight: 600,
        [theme.breakpoints.down("md")]: {
          fontSize: 16,
        }
      },
      "& .shieldItemSubTitle": {
        fontSize: 16,
        [theme.breakpoints.down("md")]: {
          fontSize: 14,
        }
      },
    },
}));

export const CommonTerms = styled("div")(({ theme }) => ({
  marginBottom: '72px',

  [theme.breakpoints.down("md")]: {
    marginBottom: '32px',
  },

  '& .title': {
    fontSize:"40px",
    marginBottom: '32px',

    [theme.breakpoints.down("md")]: {
      fontSize: '20px',
    }
  }
  
}));
export const CommonTermsCard = styled("div")(({ theme }) => ({
  background: '#F4F5F6',
  padding: '48px 32px',

  [theme.breakpoints.down("md")]: {
    padding: '32px 16px',
  },
}));

export const CommonTermsCardString = styled("div")(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
    '&:not(:last-child)': {
    marginBottom: '48px',
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    '&:not(:last-child)': {
      marginBottom: 0,
    },
  }
}));

export const CommonTermsItem = styled("div")(({ theme }) => ({
  "& .textLink": {
    color: '#0E263E',
    textDecoration: 'underline',
  },
  // '&:not(:last-child)': {
  //   marginBottom: '48px',
  // },
  display: 'inline-flex',
  width: 'calc(50% - 24px)',
  alignItems: 'center',
  [theme.breakpoints.down("md")]: {
    marginBottom: '32px',

    width: '100%',
    "& .titleItem": {
      fontSize: '16px'
    },
    "& .subtitleItem": {
      fontSize: '16px'
    }
  },
}));

export const Requirements = styled("div")(({ theme }) => ({
  margin: '72px auto',
  display: 'flex',
  '& .imageMobile': {
    display: 'none'
  },
  '& .ButtonMobile': {
    display: 'none',
  },
  [theme.breakpoints.down("md")]: {
    margin: '32px auto',

    '& .title': {
      fontSize: '20px',
      paddingBottom: '32px',
      margin: 0,
    },
    '& .imageDesktop': {
      display: 'none'
    },
    '& .imageMobile': {
      display: 'block',
      margin: 'auto',
      '& img': {
        margin: '0 auto 42px auto',
        display: 'block',
      }
    },
    '& .ButtonMobile': {
      display: 'block',
      margin: 'auto',
    },
  },

}));

export const RequirementsItem = styled("div")(({ theme }) => ({
  display: 'flex',
  marginBottom: '48px',
  alignItems: 'center',
  '& img': {
    marginRight: '16px',
  },

  [theme.breakpoints.down("md")]: {
    '& .itemText': {
      fontSize: '16px',
    },
  }
}));

export const HowToApply = styled("section")(({ theme }) => ({
  marginTop: 60,
  marginBottom: 110,
  '& .itemTitle': {
    fontWeight: 600,
    color: '#131416',
    margin: '20px 0 8px',
    [theme.breakpoints.down("md")]: {
      margin: '16px 0 8px',
    }
  },
  '& .itemSubTitle': {
    color: '#676E79',
    fontSize: '16px',
    lineHeight: '24px',
    [theme.breakpoints.down("md")]: {
      fontSize: '14px',
    }

  },
  "& .title": {
    marginBottom: '72px'
  },
  "& span": {

  },
  "& .numberMobile": {
    display: 'none'
  },

  [theme.breakpoints.down("md")]: {
    marginTop: 32,
    marginBottom: 42,
    '& .item': {
      width: '100%',
    },

    '& .item:not(:first-of-type)': {
      marginTop: 30,
    },
    "& .numberMobile": {
      display: 'block'
    },
    "& .numberDesktop": {
      display: 'none'
    },
    "& .title": {
      fontSize: '20px',
      marginBottom: '32px'
    },
    width: "100%",
    position: "relative",
    "& div": {
      marginTop: 50,
      margin: 0,
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center",
    },
    "& img": {
      width: 60,
      height: 60,
    },
    "& hr": {
      display: "none",
    },
  },

  [theme.breakpoints.up("md")]: {
    width: '100%',
    "& hr": {
      position: "absolute",
      width: 800,
      background: "#C1CBD8",
      borderColor: "#C1CBD8",
      border: "1px solid #C1CBD8",
      top: "40%",
      zIndex: -1,
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& hr": {
      width: 657,
    },
  },
}));


export const Contacts = styled("section")(({ theme }) => ({
  width: "100%",
  marginBottom: 72,

  [theme.breakpoints.down("md")]: {
    marginBottom: 72,
  },
  '& .cardItemIcon': {
    width: 42,
    [theme.breakpoints.down("md")]: {
      width: 24,
    },
  },
  '& .contactTitle': {
    margin: '72px 0',
    fontSize: 40,
    [theme.breakpoints.down("md")]: {
      margin: '32px 0 24px',
      fontSize: 20,
    },
  },
  "& .cardItemsWrapper": {
    display: 'flex',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',

    },
  },
  "& .cardItemQuestions": {
    backgroundColor: '#F7F8FA',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    width: 'calc( ( 100% - 40px ) / 2 )',
    '&:not(:last-child)': {
      marginRight: '86px',
    },
    "& .cardItemTitle": {
      margin: '24px 0',
      lineHeight: '24px',
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        margin: '8px 0 16px',
        fontSize: 16,
      }
    },
    [theme.breakpoints.down("md")]: {
      width: '100%',
      '&:not(:last-child)': {
        marginBottom: 24,
      }
    },
  },
}));
export const HelpfullInfo = styled("section")(({ theme }) => ({
  "& button":{
    textTransform: 'none',
  },
  width: '100%',
  '& .title': {
    fontSize: 40,
  },
  [theme.breakpoints.down("md")]: {
    '& .title': {
      fontSize: 20,
    },
  },

  [theme.breakpoints.up("md")]: {
    background: "#ffffff",
  },
}));
