import { FC, useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = (): void => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				cls.sidebar,
				{ [cls.collapsed]: collapsed },
				[className],
			)}
		>
			{/* <Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
			>
				toggle
			</Button> */}
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
