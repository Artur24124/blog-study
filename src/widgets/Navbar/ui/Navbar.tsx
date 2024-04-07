import { FC } from 'react';

import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
	<nav className={classNames(cls.navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink theme={AppLinkTheme.SECONDARY} to='/'>Main</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
		</div>
	</nav>
);
