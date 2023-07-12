import { localization } from '../../localization'

export const getMessage  = (code: number | string, language: string): any => {
	const somethingWrong = {title: localization.infoSomethingWrong[language], subTitle: localization.infoRefreshPage[language]};
const alreadyHas = {title: localization.infoYouHaveValidNumber[language], subTitle: localization.infoYouCantSendAgain[language]}
 
const errorsText: any = {
	0: somethingWrong,
	1: {title: localization.infoLimitExceeded[language], subTitle: localization.infoInfoWillPlacedOnResourses[language]},
	2: somethingWrong,
	3: somethingWrong,
	4: alreadyHas,
	5: alreadyHas,
};
	return errorsText[code]
}
 