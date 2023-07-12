import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  margin: 0,
  padding: 0,
  '& li': {
    listStyleType: 'none',
  },
  '& .isError': {
    border: '1px solid #FF421D',
  }
}));

export const Select = styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  minHeight: '56px',
  minWidth: '250px',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  borderRadius: '4px',
  cursor: 'pointer',
}));

export const Current = styled("div")(({ theme }) => ({
  margin: 'auto 0 auto 16px',
  fontSize: 16,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

export const Content = styled("ul")(({ theme }) => ({
  cursor: 'pointer',
  height: '312px',
    overflowY: 'scroll',
    borderRadius: '8px',
}));

export const ContentItem = styled("li")(({ theme }) => ({
  padding: '16px',
  fontSize: 16,

  '&:hover': {
    backgroundColor: 'rgba(189, 189, 189, 0.2)',
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

export const Arrow = styled("span")(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  right: '20px',
  height: '100%',
  width: '15px',
  '& > img': {
    transition: 'transform 0.3s',
  },
}));

export const Label = styled("label")(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
}));

export const LabelText = styled("p")(({ theme }) => ({
    paddingLeft: '16px',
    fontSize: 16,
    color: '#768093',
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
}));