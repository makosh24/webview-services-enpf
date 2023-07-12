import React, { useState } from 'react'
import {
    Banner,
    BannerWrapper,
    BannerShields,
    CommonTerms,
    CommonTermsCard,
    CommonTermsCardString,
    CommonTermsItem,
    Requirements,
    RequirementsItem,
    HowToApply,
    Contacts,
    HelpfullInfo,
} from './styled'
// import { button } from 'bccbusiness-ui-components'
// import requirementsImg from '../../assets/img/requirementsImg.png'
// import checkboxRequirements from '../../assets/svg/checkbox-requirements.svg'
// import headphone from '../../assets/svg/headphone.svg'
// import mail from '../../assets/svg/mail.svg'
// import n505 from '../../assets/svg/505.svg'
// import room from '../../assets/svg/room.svg'
// import rounded from '../../assets/svg/icon.svg'
// import rounded2 from '../../assets/svg/icon1.svg'
// import rounded3 from '../../assets/svg/icon2.svg'
// import button_whatsup from '../../assets/svg/button_whatsup.png'
// import eclipse from '../../assets/svg/eclipse.svg'
import Box from '@mui/material/Box'
import { LoanForm } from '../LoanForm'
import { Typography } from '@mui/material'
import { CustomTabs } from '../CustomTabs'
import { localization } from '../../localization'

// import bannerinfo0 from '../../assets/svg/bannerinfo0.svg'
// import bannerinfo1 from '../../assets/svg/bannerinfo1.svg'
// import bannerinfo2 from '../../assets/svg/bannerinfo2.svg'
// const shieldsImg = [bannerinfo0, bannerinfo1, bannerinfo2]

interface IMain {
    language: string
}

export const Main = ({ language }: IMain) => {
    const [tabNumber, setTabNumber] = useState<number>()
    const changeTab = (index: number) => {
        setTabNumber(index)
    }
    const handleTermsClick = () => setTabNumber(0)
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex="1 1 auto"
        >
            <Banner>
                <BannerWrapper>
                    <Box className="titleText">
                        <Typography className="title">
                            {localization.banerTitleBeforeColored[language]}
                            <span style={{ color: '#27AE60' }}>
                                {localization.banerTitleColored[language]}
                            </span>
                            {localization.banerTitleAfterColored[language]}
                        </Typography>
                        <Typography
                            textAlign="left"
                            className="subTitle"
                            fontWeight={700}
                        >
                            {localization.banerSubTitle[language]}
                        </Typography>
                        <div className="ButtonDesktop">
                            <a href="#mainForm" style={{ color: 'inherit' }}>
                                <button id="applyLink1">
                                    {localization.goToFormButton[language]}
                                </button>
                            </a>
                        </div>
                    </Box>
                    {/* <img className="imageBanner" src={room} alt="room" /> */}

                    <a
                        href="#mainForm"
                        style={{ color: 'inherit' }}
                        className="ButtonMobile"
                    >
                        <button id="applyLink2">
                            {localization.goToFormButton[language]}
                        </button>
                    </a>
                </BannerWrapper>
            </Banner>
            <BannerShields>
                {Array(3)
                    .fill(null)
                    .map((_, index) => (
                        <Box className="shieldItem" key={`bannerinfo${index}`}>
                            {/* <img
                                width={50}
                                height={50}
                                src={shieldsImg[index]}
                                alt={`bannerinfo${index}`}
                            /> */}
                            <Typography>
                                <span className="shieldItemTitle">
                                    {
                                        localization[`shieldTitle_${index}`][
                                            language
                                        ]
                                    }
                                </span>
                                <span className="shieldItemSubTitle">
                                    {
                                        localization[`shieldSubTitle_${index}`][
                                            language
                                        ]
                                    }
                                </span>
                            </Typography>
                        </Box>
                    ))}
            </BannerShields>
            <CommonTerms>
                <Typography
                    textAlign={'center'}
                    fontWeight={600}
                    className="title"
                >
                    {localization.commonTermsTitle[language]}
                </Typography>
                {/* TODO: Вынести в цикл, чтобы избежать дублирования */}
                <CommonTermsCard>
                    <CommonTermsCardString>
                        <CommonTermsItem>
                            {/* <img
                                src={eclipse}
                                alt="eclipse"
                                style={{
                                    marginBottom: 1,
                                    width: '8px',
                                    marginRight: '24px',
                                }}
                            /> */}
                            <Typography
                                className="titleItem"
                                fontWeight={700}
                                fontSize={'20px'}
                            >
                                {localization.commonTermsTitle_0[language]}
                            </Typography>
                        </CommonTermsItem>
                        <CommonTermsItem>
                            {/* <img
                                src={eclipse}
                                alt="eclipse"
                                style={{ width: '8px', marginRight: '24px' }}
                            /> */}
                            <div>
                                <Typography
                                    className="titleItem"
                                    fontWeight={700}
                                    fontSize={'20px'}
                                    lineHeight={'28px'}
                                    marginBottom={'8px'}
                                >
                                    {localization.commonTermsTitle_1[language]}
                                </Typography>
                            </div>
                        </CommonTermsItem>
                    </CommonTermsCardString>
                    <CommonTermsCardString>
                        <CommonTermsItem>
                            {/* <img
                                src={eclipse}
                                alt="eclipse"
                                style={{ width: '8px', marginRight: '24px' }}
                            /> */}
                            <Typography
                                fontWeight={700}
                                fontSize={'20px'}
                                className="titleItem"
                            >
                                {localization.commonTermsTitle_2[language]}
                            </Typography>
                        </CommonTermsItem>
                        <CommonTermsItem>
                            {/* <img
                                src={eclipse}
                                alt="eclipse"
                                style={{ width: '8px', marginRight: '24px' }}
                            /> */}
                            <div>
                                <Typography
                                    className="titleItem"
                                    fontWeight={700}
                                    fontSize={'20px'}
                                    lineHeight={'28px'}
                                    marginBottom={'8px'}
                                >
                                    {
                                        localization
                                            .commonTermsTitleBeforeLink_3[
                                            language
                                        ]
                                    }
                                    <a
                                        onClick={handleTermsClick}
                                        className="textLink"
                                        href="#helpfullInfornation"
                                    >
                                        {
                                            localization.commonTermsTitleLink_3[
                                                language
                                            ]
                                        }
                                    </a>{' '}
                                    {
                                        localization
                                            .commonTermsTitleAfterLink_3[
                                            language
                                        ]
                                    }
                                </Typography>

                                <Typography
                                    className="subtitleItem"
                                    fontSize={'20px'}
                                >
                                    {
                                        localization
                                            .commonTermsSubTitleBeforeLink_3[
                                            language
                                        ]
                                    }
                                    <a className="textLink" href="#mainForm">
                                        {
                                            localization
                                                .commonTermsSubTitleLink_3[
                                                language
                                            ]
                                        }
                                    </a>
                                    {
                                        localization.commonTermsSubTitleAfter_3[
                                            language
                                        ]
                                    }
                                </Typography>
                            </div>
                        </CommonTermsItem>
                    </CommonTermsCardString>
                </CommonTermsCard>
            </CommonTerms>
            {/* TODO: Убрать дублирование */}
            <Requirements>
                <div className="imageDesktop">
                    {/* <img
                        src={requirementsImg}
                        alt="requirementsImg"
                        style={{ objectFit: 'contain', width: '100%' }}
                    /> */}
                </div>
                <div>
                    <Typography
                        fontWeight={700}
                        fontSize={'32px'}
                        marginBottom="64px"
                        className="title"
                        textAlign={'center'}
                    >
                        {localization.requirements[language]}
                    </Typography>
                    <div className="imageMobile">
                        {/* <img
                            src={requirementsImg}
                            alt="requirementsImg"
                            style={{ objectFit: 'contain', width: '100%' }}
                        /> */}
                    </div>
                    <RequirementsItem>
                        {/* <img
                            src={checkboxRequirements}
                            alt="checkboxRequirements"
                        /> */}
                        <Typography fontWeight={700} className="itemText">
                            {localization.requirements_0[language]}
                        </Typography>
                    </RequirementsItem>
                    <RequirementsItem>
                        {/* <img
                            src={checkboxRequirements}
                            alt="checkboxRequirements"
                        /> */}
                        <Typography fontWeight={700} className="itemText">
                            {localization.requirements_1[language]}
                        </Typography>
                    </RequirementsItem>
                    <RequirementsItem>
                        {/* <img
                            src={checkboxRequirements}
                            alt="checkboxRequirements"
                        /> */}
                        <Typography fontWeight={700} className="itemText">
                            {localization.requirements_2[language]}
                        </Typography>
                    </RequirementsItem>
                    <a
                        href="#mainForm"
                        style={{ color: 'inherit' }}
                        className="ButtonMobile"
                    >
                        <button id="applyLink3">
                            {localization.goToFormButton[language]}
                        </button>
                    </a>
                </div>
            </Requirements>
            <HowToApply>
                <Typography
                    textAlign={'center'}
                    fontWeight={700}
                    fontSize={'40px'}
                    className="title"
                >
                    {localization.howToApply[language]}
                </Typography>
                <Box
                    position="relative"
                    display={'flex'}
                    justifyContent={'space-around'}
                >
                    {/* <img
                        width={98}
                        height={98}
                        src={rounded}
                        alt="icon"
                        className="numberDesktop"
                    /> */}
                    {/* <img
                        width={98}
                        height={98}
                        src={rounded2}
                        alt="icon"
                        className="numberDesktop"
                    /> */}
                    {/* <img
                        width={98}
                        height={98}
                        src={rounded3}
                        alt="icon"
                        className="numberDesktop"
                    /> */}
                    <hr className="line" />
                </Box>

                <Box
                    className={'second'}
                    display={'flex'}
                    justifyContent={'space-around'}
                    marginTop={'20px'}
                >
                    <Box
                        width={322}
                        justifyContent={'center'}
                        alignItems={'center'}
                        textAlign={'center'}
                        display={'flex'}
                        flexDirection={'column'}
                        className="item"
                    >
                        {/* <img
                            width={98}
                            height={98}
                            src={rounded}
                            alt="icon"
                            className="numberMobile"
                        /> */}
                        <span className="itemTitle" style={{ width: 220 }}>
                            {localization.howToApplyTitle_0[language]}
                        </span>
                        <span className="itemSubTitle">
                            {localization.howToApplySubTitle_0[language]}
                        </span>
                    </Box>

                    <Box
                        width={322}
                        justifyContent={'center'}
                        alignItems={'center'}
                        textAlign={'center'}
                        display={'flex'}
                        flexDirection={'column'}
                        className="item"
                    >
                        {/* <img
                            width={98}
                            height={98}
                            src={rounded2}
                            alt="icon"
                            className="numberMobile"
                        /> */}

                        <span className="itemTitle">
                            {localization.howToApplyTitle_1[language]}
                        </span>
                        <span className="itemSubTitle">
                            {localization.howToApplySubTitle_1[language]}
                        </span>
                    </Box>
                    <Box
                        width={322}
                        justifyContent={'center'}
                        alignItems={'center'}
                        textAlign={'center'}
                        display={'flex'}
                        flexDirection={'column'}
                        className="item"
                    >
                        {/* <img
                            width={98}
                            height={98}
                            src={rounded3}
                            alt="icon"
                            className="numberMobile"
                        /> */}
                        <span className="itemTitle">
                            {' '}
                            {localization.howToApplyTitle_2[language]}
                        </span>
                        <span className="itemSubTitle">
                            {localization.howToApplySubTitle_2[language]}
                        </span>
                    </Box>
                </Box>
            </HowToApply>

            <LoanForm changeTab={changeTab} language={language} />
            <HelpfullInfo>
                <Typography
                    textAlign={'center'}
                    margin={'72px 0 56px 0'}
                    fontWeight={600}
                    id="helpfullInfornation"
                    className="title"
                >
                    {localization.helpfullInfo[language]}
                </Typography>
                <CustomTabs tabNumber={tabNumber} language={language} />
            </HelpfullInfo>
            <Contacts>
                <Typography
                    textAlign={'center'}
                    fontWeight={600}
                    className="contactTitle"
                >
                    {localization.ifYouHaveQuestions[language]}
                </Typography>
                <Box
                    display={'grid'}
                    gridTemplateColumns={'1fr 1fr'}
                    className="cardItemsWrapper"
                >
                    <div className="cardItemQuestions">
                        {/* <img
                            src={headphone}
                            alt="headphone"
                            className="cardItemIcon"
                        /> */}
                        <span className="cardItemTitle">
                            {localization.ifYouHaveQuestions_0[language]}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <img height={28} src={n505} alt="headphone" /> */}
                            {' '}
                            <span style={{ marginLeft: '15px' }}>
                                {localization.ifYouHaveQuestions_1[language]}
                            </span>
                        </span>
                    </div>
                    <div className="cardItemQuestions">
                        {/* <img src={mail} alt="mail" className="cardItemIcon" /> */}
                        <span className="cardItemTitle">
                            {localization.ifYouHaveQuestions_2[language]}
                        </span>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://api.whatsapp.com/send/?phone=77471111505&text&type=phone_number&app_absent=0"
                        >
                            <button id="button_whatsup" style={{width: '151px', borderRadius: '20px'}}>
                                {/* <img
                                    width={24}
                                    height={24}
                                    src={button_whatsup}
                                    alt="button_whatsup"
                                    style={{ marginRight: '8px' }}
                                /> */}
                                Whatsapp
                            </button>
                        </a>
                    </div>
                </Box>
            </Contacts>
        </Box>
    )
}
