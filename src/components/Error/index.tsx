import React from "react";
import { Typography, Button} from "@mui/material";
import { Container} from './styled';
// import error from "../../assets/svg/error.svg";
import {getMessage} from './constants'
import { localization } from '../../localization'
import {PAGE_URL} from '../../common/constants'


export interface IError {
    code: number | string,
    language: string,
}

export const Error = ({code, language}: IError) => {
    const {title, subTitle} =  getMessage(code, language) 
    return (
        <Container>
            {/* <img width={56} height={56} src={} alt="error" /> */}

            <Typography
                textAlign={'center'}
                fontWeight={600}
                className='title'
            >
                {title}
            </Typography>
            <Typography textAlign={'center'}  className='subTitle'>
                {subTitle}
            </Typography>
            <a href={PAGE_URL}>
                <Button className={'returnButton'}>
                    <span className={'returnButtonText'}>
       
                        {localization.infoBackToSite[language]}
                    </span>
                </Button>
            </a>
        </Container>
    )
}
