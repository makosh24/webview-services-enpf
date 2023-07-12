import { styled } from '@mui/material/styles'
import {maxWidth} from '../../common/constants'



export const StyledFooter = styled('section')(({ theme }) => ({
    width: '100%',
    background: '#f7f8fa',
    fontSize: '14px',

    '& .container': {
        width: '100%',
        maxWidth: maxWidth,
        margin: 'auto',
        padding: '64px 24px',
    },
    '& hr': {
        border: '1px solid #C1CBD8',
        width: '100%',
        margin: '28px 0',
    },

    '& .footerLink': {
        color: '#A9ACB0',
        marginRight: '24px',
    },
    [theme.breakpoints.down('md')]: {
        '& .container': {
            padding: '32px 40px',
        },

        '& div': {
            position: 'relative',
        },
    },
}))

