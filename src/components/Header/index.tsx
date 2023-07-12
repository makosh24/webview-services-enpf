import React, { useState } from 'react'
// import whatsapp from '../../assets/svg/whatsapp.svg'
// import phone from '../../assets/svg/tel.svg'
// import arrow from '../../assets/svg/arrow.svg'
// import logo from '../../assets/svg/logo.svg'
import Box from '@mui/material/Box'
import { languages, languagesType, localization } from '../../localization'
import { Root, Links, DropWrapper, DropItem } from './styled'
import {maxWidth} from '../../common/constants'


interface IHeader {
    setLanguage: (item: languagesType) => void
}

export const Header = ({ setLanguage: setLanguageProps }: IHeader) => {
    const [isOpen, setisOpen] = useState(false)
    const [language, setLanguage] = useState<languagesType>(languages[0])

    const handleChangeLanguage = (language: languagesType) => {
        setLanguage(language)
    }

    const handlelanguageChange = (item: languagesType) => {
        handleChangeLanguage(item)
        setLanguageProps(item)
    }

    return (
        <Root>
            <Box
                height="inherit"
                maxWidth={maxWidth}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <a href="https://www.bcc.kz/">
                    {/* <img src={logo} alt="logo" /> */}
                </a>
                <Box display="flex" alignItems="center" gap={3}>
                    <Links>
                        <a
                            href="https://api.whatsapp.com/send/?phone=77471111505&text&type=phone_number&app_absent=0"
                            style={{
                                color: '#000000',
                            }}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="link"
                        >
                            {/* <img src={whatsapp} alt="whatsapp" className='iconHeader'/> */}
                            <b style={{ fontSize: 18 }}>+7 747 111 1505</b>
                        </a>
                    </Links>
                    <Links>
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="tel:505"
                            style={{ color: '#131416' }}
                            className="link"
                        >
                            {/* <img src={phone} alt="phone" className='iconHeader'/> */}
                            <b style={{ fontSize: 18 }}>505 &nbsp;</b>{' '}
                            {localization.titlePhone[language.code]}
                        </a>
                    </Links>
                    <Box
                        display="flex"
                        alignItems="center"
                        className="language"
                        onClick={() => setisOpen(!isOpen)}
                    >
                        <span style={{ fontWeight: 500, fontSize: '0.9rem' }} className='iconHeader'>
                            {language?.shortName}
                        </span>
                        &nbsp;&nbsp;
                        {/* <img
                            style={{
                                width: 10,
                                height: 10,
                                margin: 0,
                            }}
                            src={arrow}
                            alt="arrow"
                        /> */}
                        {isOpen && (
                            <DropWrapper>
                                {languages.map((item) => (
                                    <DropItem
                                        onClick={() =>
                                            handlelanguageChange(item)
                                        }
                                        key={item.id}
                                    >
                                        {item.name}
                                    </DropItem>
                                ))}
                            </DropWrapper>
                        )}
                    </Box>
                </Box>
            </Box>
        </Root>
    )
}
