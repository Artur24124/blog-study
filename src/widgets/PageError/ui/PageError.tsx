import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const reloadPage = (): void => {
		window.location.reload();
	};

	return (
		<div className={classNames(cls.pageError, {}, [className])}>
			<h1>{t('unexpectedError')}</h1>
			<Button onClick={reloadPage}>{t('reloadPage')}</Button>
		</div>
	);
};
