import { FC } from 'react';

import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
	<div className={classNames(cls.pageLoader, {}, [className])}>
		<Loader />
	</div>
);
