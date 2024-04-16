import {
	FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 800;

export const Modal: FC<ModalProps> = (props) => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	const {
		className,
		children,
		isOpen,
		onClose,
	} = props;

	const onContentClick = (e: MouseEvent): void => {
		e.stopPropagation();
	};

	const onCloseHandler = useCallback(() => {
		setIsClosing(true);

		timerRef.current = setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, ANIMATION_DELAY);
	}, [onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onCloseHandler();
		}
	}, [onCloseHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const modalClassName = classNames(
		cls.modal,
		{
			[cls.opened]: isOpen,
			[cls.closing]: isClosing,
		},
		[className, cls[theme]],
	);

	return (
		<Portal>
			<div className={modalClassName}>
				<div className={cls.overlay} onClick={onCloseHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
