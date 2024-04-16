import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

	const toggleAuthModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<nav className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls.login}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={toggleAuthModal}
			>
				{t('login')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
				<h3>{t('login')}</h3>
			</Modal>
		</nav>
	);
};
