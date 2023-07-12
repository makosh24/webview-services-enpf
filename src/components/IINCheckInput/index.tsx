import * as React from 'react'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { Typography } from '@mui/material'
import { Wrapper } from './styled'
import { FC } from 'react'
import {localization} from '../../localization'

interface Props {
    text?: string
    value: string
    setValue: (value: string) => void
    error: boolean,
    language: string,

}
export const IINCheckInput: FC<Props> = ({ text, value, setValue, error, language }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const str = event.target.value
        const res = str.replace(/[^0-9]+$/g, '')
        if (res.length <= 12) setValue(res)
    }

    return (
        <Wrapper>
            {text && (
                <InputLabel
                    sx={{ margin: 0, color: '#2B2E33' }}
                    htmlFor="formatted-text-mask-input"
                >
                    {text}
                </InputLabel>
            )}
            <TextField
                placeholder={localization.loanFormIIN[language]}
                type="text"
                variant="outlined"
                value={value}
                onChange={handleChange}
                fullWidth
                color="primary"
            />
            {error && (
                <Typography color="#FF421D" fontSize="12px" fontWeight={'600'}>
                    {localization.loanFormFillField[language]}
                </Typography>
            )}
        </Wrapper>
    )
}
