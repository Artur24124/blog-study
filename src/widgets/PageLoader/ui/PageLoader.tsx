import { FC } from 'react';

import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
	<div className={classNames(cls.pageLoader, {}, [className])}>
		<Spinner />
	</div>
);
