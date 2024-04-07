import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
	const { t } = useTranslation('main');

	return (
		<div>
			<h1>{t('mainPage')}</h1>
		</div>
	);
};

export default MainPage;
