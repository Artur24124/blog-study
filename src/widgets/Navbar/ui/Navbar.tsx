import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>{t('menu.main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t('menu.about')}</AppLink>
			</div>
		</nav>
	);
};
