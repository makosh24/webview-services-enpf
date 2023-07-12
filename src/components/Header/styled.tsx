import { styled } from '@mui/material/styles'

export const Root = styled('div')(({ theme }) => ({
    '& .iconHeader': {
        marginRight: 8,
    },
    "& .language": {
        cursor: 'pointer',
        position: 'relative',
    },
    '& .link': {
        display: 'flex',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        height: '80px',
        width: '100%',
        padding: '0',
    },
    [theme.breakpoints.up('md')]: {
        width: '100%',
        margin: '0 auto',
        padding: '40px 0',
    },
}))

export const Links = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
    [theme.breakpoints.down('xl')]: {
        padding: 0,
    },
}))

export const DropWrapper = styled('div')(({ theme }) => ({
    padding: '16px 0',
    cursor: 'pointer',
    position: 'absolute',
    top: '24px',
    left: '-92px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    zIndex: 1,
    background: '#FFFFFF',
}))

export const DropItem = styled('div')(({ theme }) => ({
    padding: '12px 32px',
    "&:hover": {
        background: 'rgba(189, 189, 189, 0.2)'
    },

}))