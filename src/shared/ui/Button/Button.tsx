import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib';

import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.CLEAR,
		type,
		...otherProps
	} = props;

	return (
		<button
			type='button'
			className={classNames(cls.button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
