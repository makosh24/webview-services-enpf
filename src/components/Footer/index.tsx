import React from 'react'
import Box from '@mui/material/Box'
// import facebook from '../../assets/svg/facebook.svg'
// import youtube from '../../assets/svg/youtube.svg'
// import telegram from '../../assets/svg/telegram.svg'
// import instagram from '../../assets/svg/instagram.svg'
import Typography from '@mui/material/Typography'
import { localization } from '../../localization'
import {StyledFooter} from './styled'


interface IMain {
    language: string,
}

export const Footer = ({language}: IMain) => {
    return (
        <StyledFooter>
            <Box className="container">
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box display="flex" alignItems="center" gap={'28px'}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://facebook.com/bcc.kz"
                        >
                            {/* <img src={facebook} alt="facebook" /> */}
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://www.youtube.com/user/bcckz"
                        >
                            {/* <img src={youtube} alt="youtube" /> */}
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://t.me/BCCKZ_News"
                        >
                            {/* <img src={telegram} alt="telegram" /> */}
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://www.instagram.com/centercreditkz/?hl=ru"
                        >
                            {/* <img src={instagram} alt="instagram" /> */}
                        </a>
                    </Box>
                </Box>
                <hr />
                <Typography
                    textAlign="left"
                    fontSize="12px"
                    marginBottom={'12px'}
                >
                    © 2000-{new Date().getFullYear()}, {localization.footerBankName[language]} <br />
                    {localization.allRightsSecured[language]}
                </Typography>

                <Typography textAlign="left" fontSize="12px">
                    {localization.licenseBeforeLink[language]}
                    <a
                        href="https://www.bcc.kz/upload/medialibrary/11f/11fae0715036bf90a1fe0720c93124d5.pdf"
                        style={{ color: '#27ae60' }}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        {localization.licenseLink[language]}
                    </a>
                    {localization.licenseAfterLink[language]}
                </Typography>
            </Box>
        </StyledFooter>
    )
}
