import { FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui';
import { DarkIcon, LightIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? (
				<LightIcon />
			) : (
				<DarkIcon />
			)}
		</Button>
	);
};
