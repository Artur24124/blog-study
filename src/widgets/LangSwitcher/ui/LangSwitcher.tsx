import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();
	const { changeLanguage, language } = i18n;

	const toggleLanguage = async (): Promise<void> => {
		changeLanguage(language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			theme={ButtonTheme.BACKGROUND_INVERTED}
			className={classNames(cls.langSwitcher, {}, [className])}
			onClick={toggleLanguage}
		>
			{t('lang')}
		</Button>
	);
};
