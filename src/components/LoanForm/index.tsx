import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Button, DialogActions } from '@mui/material'
import Dialog from '@mui/material/Dialog'
// import secured from '../../assets/svg/secured.svg'
import { CustomSelect } from '../CustomSelect'
import { cities, ICity } from './constants'
import { CustomSlider } from '../Slider'
import { PhoneCheckInput } from '../PhoneCheckInput'
import { IINCheckInput } from '../IINCheckInput'
import { Error } from '../Error'
// import { button, BCCcheckbox } from 'bccbusiness-ui-components'
import {
    Bottom,
    Fields,
    SumWrapper,
    Container,
    Wrapper,
    PrivatDataLabel,
    CheckboxArea,
    BottomTextWrapper,
    SuccessContainer,
} from './styled'
// import error from '../../assets/svg/error.svg'
// import warning from '../../assets/svg/warning.svg'
// import success from '../../assets/svg/success.svg'
// import topok from '../../assets/svg/topok.svg'
// import bottomok from '../../assets/svg/bottomok.svg'
// import cross from '../../assets/svg/cross.svg'
import { OTPCheck } from '../OTPCheck'
import { localization } from '../../localization'
import { API_URL, PAGE_URL } from '../../common/constants'

// TODO: Разрулить вопрос с env переменными

const minDefaultLoan = 3000000
const startLoan = 10000000
const maxDefaultLoan = 25000000
const step = 50000
const minLoanСoefficient = 0.2
const maxLoanСoefficient = 0.8

export interface State {
    textmask: string
    numberformat: string
}

interface ILoanForm {
    changeTab: (index: number) => void
    language: string
}

export const maskPhone = (num: string) =>
    num.replace(/ /g, '').replace(/[()]/g, '')

export const LoanForm = ({ changeTab, language }: ILoanForm) => {
    const [isLimitExceeded, setIsLimitExceeded] = useState<boolean>(false)
    const [isLoaded, setisLoaded] = useState<boolean>(false)
    const [isOTPPage, setIsOTPPage] = useState<boolean>(false)
    const [inn, setInn] = useState<string>('')
    const [phone, setPhone] = React.useState<State>({
        textmask: '+7',
        numberformat: '',
    })
    const [isAgree1, setIsAgree1] = useState<boolean>(false)
    const [isAgree2, setIsAgree2] = useState<boolean>(false)
    const [city, setCity] = useState<ICity>()
    const [price, setPrice] = useState<number>(startLoan)
    const [firstPayment, setFirstPayment] = useState<number>(
        price * minLoanСoefficient
    )
    const [applicationId, setApplicationId] = useState<string>('')
    const [acceptedApplicationId, setAcceptedApplicationId] = useState<number>()
    const [errorCodeState, setErrorCode] = useState<number | null>(null)
    const [isShowDataErrors, setIsShowDataErrors] = useState<boolean>(false)

    const getLocalFormat = (num: number) => new Intl.NumberFormat().format(num)
    useEffect(() => {
        fetch(`${API_URL}/api/Limit`)
            .then((response) => {
                return response.json()
            })
            .then(({ isLimitExceeded, errorCode }) => {
                if (errorCode !== undefined) setErrorCode(errorCode)

                setisLoaded(true)
                if (isLimitExceeded !== undefined)  setIsLimitExceeded(isLimitExceeded)
            })
            .catch(({errorCode}) => {
                setisLoaded(true);
                setErrorCode(errorCode);
            })
    }, [])

    const [canSendApply, setCanSendApply] = useState(true)
    const sendRequest = () => {
        if (
            !canSendApply ||
            !isAgree1 ||
            !isAgree2 ||
            !city ||
            !price ||
            !firstPayment ||
            !inn ||
            inn.length !== 12 ||
            !phone ||
            maskPhone(phone.textmask).length !== 12
        ) {
            setIsShowDataErrors(true)
            return
        }
        setCanSendApply(false)
        const data = {
            cityCode: city?.cityCode,
            realEstatePrice: price,
            initialPayment: firstPayment,
            loanAmount: price - firstPayment,
            iin: inn,
            phone: maskPhone(phone.textmask),
            language: language,
        }

        fetch(`${API_URL}/api/MortgageApplication/Apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json()
            })
            .then(({ applicationId, errorCode }) => {
                if (errorCode !== undefined) setErrorCode(errorCode)
                if (applicationId) {
                    setApplicationId(applicationId)
                    setIsOTPPage(true)
                    setIsModalOpen(true)
                }
            })
            .catch(({ errorCode }) => {
                setErrorCode(errorCode)
            })
            .finally(() => {
                setCanSendApply(true)
            })
    }

    const handleClickLinkSuccses = () => {
        changeTab(1)
        setIsModalOpen(false)
    }

    const lengthOTP = 4
    const [isNotSendVerify, setIsNotSendVerify] = useState(false)
    const onInput = (value: string) => {
        setErrorCode(null)

        if (value.replace(' ', '').length === lengthOTP && !isNotSendVerify) {
            setIsNotSendVerify(true)
            const data = {
                otpCode: value,
                applicationId: applicationId,
            }
            fetch(`${API_URL}/api/MortgageApplication/Verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    return response.json()
                })
                .then(({ acceptedApplicationId, errorCode }) => {
                    if (acceptedApplicationId) {
                        setAcceptedApplicationId(acceptedApplicationId)
                    } else {
                        setErrorCode(errorCode)
                    }
                })
                .catch(({ errorCode }) => {
                    setErrorCode(errorCode)
                })
                .finally(() => setIsNotSendVerify(false))
        }
    }

    const handleCityChange = (value: ICity) => {
        if (price > value.maxPrice) {
            setPrice(value.maxPrice)
        }

        const newMaxFirstPayment = value.maxPrice * maxLoanСoefficient
        if (firstPayment > newMaxFirstPayment) {
            setFirstPayment(newMaxFirstPayment)
        }

        setCity(value)
    }

    const handlePriceChange = (value: number) => {
        setPrice(value)
        const newMinFirstPayment = value * minLoanСoefficient
        const newMaxFirstPayment = value * maxLoanСoefficient

        if (firstPayment < newMinFirstPayment) {
            setFirstPayment(newMinFirstPayment)
        }
        if (firstPayment > newMaxFirstPayment) {
            setFirstPayment(newMaxFirstPayment)
        }
    }

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const isErrorPhone =
        isShowDataErrors &&
        (maskPhone(phone.textmask).length !== 12 ||
        maskPhone(phone.textmask).slice(0, 3) !== '+77')

    if (!isLoaded)
        return (
            <Typography
                textAlign={'center'}
                margin={'72px 0 32px 0'}
                variant="h4"
                fontWeight={600}
                id="mainForm"
            >
                Loading...
            </Typography>
        )
        const currentDate = new Date();

        const dateStart = new Date('2023-07-12 10:00:00'); //2023-07-12 10:00:00

        console.log('currentDate = ', currentDate, 'dateStart = ', dateStart, 'dateStart>currentDate', dateStart>currentDate)

        if (dateStart>currentDate)
        return (
            <Wrapper id="mainForm">
                <Container>
                    {/* <img width={56} height={56} src={warning} alt="warning" /> */}

                    <Typography
                        textAlign={'center'}
                        margin={'72px 0 32px 0'}
                        variant="h5"
                        fontWeight={600}
                    >
                        {localization.anounceTitle[language]}
                    </Typography>
                    <Typography textAlign={'center'} margin={'24px auto'}>
                        {localization.anounceSubTitle[language]}
                    </Typography>
                </Container>
            </Wrapper>
        )



    if (isLimitExceeded)
        return (
            <Wrapper id="mainForm">
                <Container>
                    {/* <img width={56} height={56} src={error} alt="error" /> */}

                    <Typography
                        textAlign={'center'}
                        margin={'72px 0 32px 0'}
                        variant="h5"
                        fontWeight={600}
                    >
                        {localization.infoImpossibleSendLimitExceeded[language]}
                    </Typography>
                    <Typography textAlign={'center'} margin={'24px auto'}>
                        {localization.infoInfoWillPlacedOnResourses[language]}
                    </Typography>
                </Container>
            </Wrapper>
        )

    const handleCloseOTP = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            {errorCodeState !== null && errorCodeState !== 3 && (
                <Dialog
                    open={true}
                    style={{ overflowX: 'hidden' }}
                    className="GLOBAL_dialog_no_overFlow"
                >
                    <Error code={errorCodeState || 0} language={language} />
                </Dialog>
            )}
            {isOTPPage && isModalOpen && (
                <Dialog open={true}>
                    <DialogActions>
                        {/* <img
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                cursor: 'pointer',
                            }}
                            onClick={handleCloseOTP}
                            width={16}
                            height={16}
                            src={cross}
                            alt="cross"
                        /> */}
                    </DialogActions>
                    <OTPCheck
                        phone={phone.textmask}
                        onChange={onInput}
                        setErrorCode={setErrorCode}
                        applicationId={applicationId}
                        language={language}
                        errorCodeState={errorCodeState}
                    />
                </Dialog>
            )}
            {acceptedApplicationId && isModalOpen && (
                <Dialog open={true}>
                    <SuccessContainer>
                        {/* <img
                            width={56}
                            height={56}
                            src={success}
                            alt="success"
                        /> */}
                        <Typography fontWeight={600} className="succsessTitle">
                            {localization.infoNuberYourQueue[language]}
                            {acceptedApplicationId}{' '}
                        </Typography>
                        <Typography
                            color="#676E79"
                            className="succsessSubTitle"
                        >
                            {localization.infoWeSendadditionalSMS[language]}
                        </Typography>
                        <Typography
                            fontWeight={600}
                            className="succsessTitleInfo"
                        >
                            {localization.infoWhatIsNext[language]}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                marginRight="16px"
                            >
                                {/* <img width={16} src={topok} alt="topok" />
                                <img
                                    width={16}
                                    height={16}
                                    src={bottomok}
                                    alt="bottomok"
                                /> */}
                            </Box>
                            <Box>
                                <Typography
                                    marginBottom="26px"
                                    className="succsessTextInfo"
                                >
                                    {
                                        localization.infoWaitCallToInvite[
                                            language
                                        ]
                                    }
                                </Typography>
                                <Typography className="succsessTextInfo">
                                    {
                                        localization.infoGoToOfficeBeforelink[
                                            language
                                        ]
                                    }

                                    <a
                                        onClick={handleClickLinkSuccses}
                                        href="#helpfullInfornation"
                                        style={{
                                            textDecoration: 'underline',
                                            color: '#18181B',
                                        }}
                                    >
                                        {
                                            localization.infoGoToOfficeLink[
                                                language
                                            ]
                                        }
                                    </a>
                                    {
                                        localization.infoGoToOfficeAfterLink[
                                            language
                                        ]
                                    }
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="buttonWrapper">
                            <a href={PAGE_URL}>
                                <Button className={'returnButton'}>
                                    <span className={'returnButtonText'}>
                                        {localization.infoBackToSite[language]}
                                    </span>
                                </Button>
                            </a>
                        </Box>
                    </SuccessContainer>
                </Dialog>
            )}
            <Wrapper>
                <Container id="mainForm">
                    <Typography
                        textAlign={'center'}
                        fontWeight={600}
                        className="title"
                    >
                        {localization.loanFormTitleBefore[language]}
                        <span style={{ color: 'rgb(39, 174, 96)' }}>
                            7-20-25
                        </span>
                        {localization.loanFormTitleAfter[language]}
                    </Typography>
                    <Typography
                        textAlign={'center'}
                        color="#676E79"
                        className="subTitle"
                    >
                        {localization.loanFormSubTitle[language]}
                    </Typography>
                    <Fields>
                        <Box>
                            <CustomSelect
                                items={cities}
                                onChange={handleCityChange}
                                label={localization.loanFormCity[language]}
                                valueName={`${language}Name`}
                                error={
                                    isShowDataErrors &&
                                    !city &&
                                    localization.loanFormCityError[language]
                                }
                            ></CustomSelect>
                        </Box>
                        <Box>
                            <CustomSlider
                                title={localization.loanFormPrice[language]}
                                value={price}
                                setValue={handlePriceChange}
                                step={step}
                                min={minDefaultLoan}
                                max={city ? city?.maxPrice : maxDefaultLoan}
                                from={`${getLocalFormat(minDefaultLoan)} ₸`}
                                to={`${
                                    city?.maxPrice
                                        ? `${getLocalFormat(city?.maxPrice)} ₸`
                                        : `${getLocalFormat(maxDefaultLoan)} ₸`
                                }`}
                            />
                        </Box>
                        <Box>
                            <CustomSlider
                                title={
                                    localization.loanFormFirstPayment[language]
                                }
                                value={firstPayment}
                                setValue={setFirstPayment}
                                step={step}
                                min={price * minLoanСoefficient}
                                max={price * maxLoanСoefficient}
                                from={`${getLocalFormat(
                                    price * minLoanСoefficient
                                )} ₸`}
                                to={`${getLocalFormat(
                                    price * maxLoanСoefficient
                                )} ₸`}
                            />
                        </Box>
                        <Box>
                            <SumWrapper>
                                <Typography>
                                    {localization.loanFormSumLoan[language]}
                                </Typography>
                                <Typography>
                                    {getLocalFormat(price - firstPayment)} ₸
                                </Typography>
                            </SumWrapper>
                        </Box>
                        <Box>
                            <PrivatDataLabel>
                                {localization.loanFormPersonalData[language]}
                            </PrivatDataLabel>

                            <Box className="inputWrapper">
                                <IINCheckInput
                                    error={
                                        isShowDataErrors && inn.length !== 12
                                    }
                                    value={inn}
                                    setValue={setInn}
                                    language={language}
                                />
                            </Box>
                            <Box className="inputWrapper">
                                <PhoneCheckInput
                                    error={isErrorPhone}
                                    setValues={setPhone}
                                    values={phone}
                                    language={language}
                                />
                                {!isErrorPhone && (
                                    <Typography color="#676E79" fontSize="12px">
                                        {
                                            localization.loanFormWeSendNumber[
                                                language
                                            ]
                                        }
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        <CheckboxArea>
                            {/* <BCCcheckbox
                                id="agree1"
                                getValue={(value) =>
                                    setIsAgree1(value as boolean)
                                }
                            >
                                {
                                    localization
                                        .loanFormAgreePersonalDataBeforeLink[
                                        language
                                    ]
                                }
                                <a
                                    style={{
                                        textDecoration: 'underline',
                                        color: '#27AE60',
                                    }}
                                    href={
                                        localization
                                            .loanFormAgreePersonalDataDocument[
                                            language
                                        ]
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {
                                        localization
                                            .loanFormAgreePersonalDataLink[
                                            language
                                        ]
                                    }
                                </a>
                                {
                                    localization
                                        .loanFormAgreePersonalDataAfterLink[
                                        language
                                    ]
                                }
                            </BCCcheckbox> */}
                        </CheckboxArea>
                        <CheckboxArea>
                            {/* <BCCcheckbox
                                id="agree2"
                                getValue={(value) =>
                                    setIsAgree2(value as boolean)
                                }
                            >
                                <div>
                                    {localization.loanFormAgreeTerms[language]}
                                </div>
                            </BCCcheckbox> */}
                        </CheckboxArea>
                        {(!isAgree1 || !isAgree2) && isShowDataErrors && (
                            <Typography
                                color="#FF421D"
                                fontSize="12px"
                                fontWeight={'600'}
                                marginBottom="32px"
                            >
                                {localization.loanFormNecessaryAgree[language]}
                            </Typography>
                        )}
                        <Bottom>
                            <BottomTextWrapper>
                                {/* <img
                                    width={18}
                                    height={18}
                                    src={secured}
                                    alt="protected"
                                    style={{ marginRight: '12px' }}
                                /> */}
                                <Typography
                                    className="text_BottomText"
                                    color="#676E79"
                                    fontSize="14px"
                                >
                                    {
                                        localization.loanFormGuaranteeSecure[
                                            language
                                        ]
                                    }
                                </Typography>
                            </BottomTextWrapper>
                            <button id="nextButton" onClick={sendRequest}>
                                {localization.loanFormContinue[language]}
                            </button>
                        </Bottom>
                    </Fields>
                </Container>
            </Wrapper>
        </>
    )
}
