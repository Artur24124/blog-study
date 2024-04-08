import { FC } from 'react';

import cls from './Spinner.module.scss';

export const Spinner: FC = () => (
	<svg
		className={cls.spinner}
		width='160'
		height='160'
		viewBox='0 0 24 24'
		fill='#ffffff'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			/* eslint-disable-next-line max-len */
			d='M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z'
		>
			<animateTransform
				attributeName='transform'
				type='rotate'
				dur='0.8s'
				values='0 12 12;360 12 12'
				repeatCount='indefinite'
			/>
		</path>
	</svg>
);
