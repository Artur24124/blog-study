import { FC } from 'react';

import { classNames } from 'shared/lib';

import './Loader.scss';

interface SpinnerProps {
	className?: string;
}

export const Loader: FC<SpinnerProps> = ({ className }) => (
	<div className={classNames('lds-ellipsis', {}, [className])}>
		<div />
		<div />
		<div />
		<div />
	</div>
);
