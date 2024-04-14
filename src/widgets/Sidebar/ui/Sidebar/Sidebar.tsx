import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { AboutIcon, MainIcon } from 'shared/assets/icons';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const { t } = useTranslation();

	const onToggle = (): void => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				cls.sidebar,
				{ [cls.collapsed]: collapsed },
				[className],
			)}
		>
			<div className={cls.menu}>
				<AppLink
					className={cls.menuLink}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
				>
					<MainIcon className={cls.menuIcon} />
					<p className={cls.menuText}>{t('menu.main')}</p>
				</AppLink>
				<AppLink
					className={cls.menuLink}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
				>
					<AboutIcon className={cls.menuIcon} />
					<p className={cls.menuText}>{t('menu.about')}</p>
				</AppLink>
			</div>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.XL}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
