import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { i18n } = useTranslation();
	const { changeLanguage, language } = i18n;

	const toggleLanguage = (): void => {
		changeLanguage(language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			className={classNames(cls.langSwitcher, {}, [className])}
			onClick={toggleLanguage}
		>
			{language.toUpperCase()}
		</Button>
	);
};
