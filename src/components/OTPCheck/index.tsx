import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import Box from '@mui/system/Box'
import OtpInput from './OTPInput'
import { maskPhone } from '../LoanForm'
// import refresh from '../../assets/svg/refresh.svg'
import { localization } from '../../localization'
import { API_URL } from '../../common/constants'

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            padding: '0 20px',
            [(theme as any).breakpoints.down('md')]: {},
        },
        title: {
            color: '#18181B',
            fontSize: '32px',
            marginTop: '32px',
        },
        otp_wrapper: {
            display: 'flex',
            justifyContent: 'center',
            margin: '32px auto',
            flexDirection: 'column',
            [(theme as any).breakpoints.down('md')]: {
            },
        },
        otp_info_wrapper: {
            marginTop: 16,
        },
        caption: {
            color: '#6B6B6F',
            fontSize: '16px',
        },
        otp_caption: {
            color: '#2B2E33',
            fontSize: '12px',
            lineHeight: '16px',
        },
        otp_send_button: {
            background: '#DEF7E8',
            borderRadius: '8px',
            padding: '8px',
            gap: '8px',
        },
        otp_send_button_text: {
            fontSize: '14px',
        },
        send_again: {
            textTransform: 'none',
            color: '#145C33',
        },
        error_message: {
            fontSize: '16px',
            color: '#FF421D',
            marginTop: '12px',
        }
    })
)

interface IOTPCheck {
    phone: string
    onChange: (value: string) => void
    setErrorCode: (code: number) => void
    applicationId: string
    language: string,
    errorCodeState: number | null,
}

const SECOND_TO_RESEND_DEFAULT = 60

export const OTPCheck: React.FC<IOTPCheck> = ({
    phone,
    onChange,
    setErrorCode,
    applicationId,
    language,
    errorCodeState,
}) => {
    useEffect(() => {
        if(errorCodeState === 3) setIsError(true)
    }, [errorCodeState])
    const classes = useStyles();

    const [otp, setOtp] = useState('')
    const [secondToResend, setSecondToResend] = useState<number>(
        SECOND_TO_RESEND_DEFAULT
    )
    const [isError, setIsError] = useState<boolean>(false)

    const handleChange = (value: string) => {
        setIsError(false)
        setOtp(value)
        onChange(value)
    }
    const [canResend, setCanResend] = useState(true)
    const resendOtp = () => {
        if (!canResend) return
        setOtp('');
        setIsError(false)
        setCanResend(false)
        const data = {
            applicationId: applicationId,
        }

        fetch(`${API_URL}/api/MortgageApplication/ResendSms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if(response.status === 200) {
                    setSecondToResend(SECOND_TO_RESEND_DEFAULT);
                    return '{}';
                }
                return response.json()
            })
            .then(({ errorCode }) => {
                if (errorCode !== undefined) {
                    setErrorCode(errorCode || 0)
                    if (errorCode === 3) setIsError(true)
                }
            })
            .catch(({ errorCode }) => {
                setErrorCode(errorCode || 0)
                if (errorCode === 3) setIsError(true)
            })
            .finally(() => {
                setCanResend(true)
            })
    }

    useEffect(() => {
        const fc = () => {
            setSecondToResend(secondToResend - 1)
        }

        if (secondToResend > 0) {
            const timer = setInterval(fc, 1000)
            return () => clearTimeout(timer)
        }
    }, [secondToResend])

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.title}>
                <strong>{localization.enterCodeSMS[language]} </strong>
            </Typography>
            <Typography className={classes.caption}>
                {localization.codeSentToPhoneBefore[language]}
                {`${maskPhone(phone).substring(0, 5)}***${maskPhone(
                    phone
                ).substring(8, 12)}`}{' '}
                {localization.codeSentToPhoneAfter[language]}
            </Typography>

            <Box className={classes.otp_wrapper} alignItems={'center'}>
                <OtpInput
                    value={otp}
                    valueLength={4}
                    onChange={handleChange}
                    isError={isError}
                ></OtpInput>
            {isError && (
                <Typography
                    textAlign="left"
                    color="#FF421D"
                    className={classes.error_message}
                    >
                    {localization.wrongCode[language]}
                </Typography>
            )}
                <Box marginLeft={2} className={classes.otp_info_wrapper}>
                    {secondToResend > 0 ? (
                        <Typography
                            className={classes.otp_caption}
                            style={{ width: '148px' }}
                        >
                            {
                                localization.canSendCodeAgainInSecondBefore[
                                    language
                                ]
                            }
                            0:{secondToResend < 10 && 0}
                            {secondToResend}
                            {
                                localization.canSendCodeAgainInSecondAfter[
                                    language
                                ]
                            }
                        </Typography>
                    ) : (
                        <Button
                            className={classes.otp_send_button}
                            onClick={resendOtp}
                        >
                            <Box display="flex" alignItems="center">
                                {/* <img
                                    width={20}
                                    height={20}
                                    src={refresh}
                                    alt="refresh"
                                /> */}

                                <Box
                                    marginLeft={1}
                                    className={classes.otp_send_button_text}
                                >
                                    <span className={classes.send_again}>
                                        {localization.sendCode[language]}
                                    </span>
                                </Box>
                            </Box>
                        </Button>
                    )}
                </Box>
            </Box>
        </div>
    )
}
