import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
    height: '64px',

    [theme.breakpoints.down('md')]: {},

    '& input': {
        padding: '20px 16px',
        fontSize: '16px',
        lineHeight: 0,
    },

    '& input::placeholder': {
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
    },
}))
