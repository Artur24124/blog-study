import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('render Sidebar', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('toggle Sidebar', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
