import { FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { DarkIcon, LightIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames('', {}, [className])}
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
