import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
	test('render Button', () => {
		render(<Button>btn</Button>);
		expect(screen.getByText('btn')).toBeInTheDocument();
	});

	test('render Button with theme clear', () => {
		render(<Button theme={ThemeButton.CLEAR}>btn</Button>);
		expect(screen.getByText('btn')).toHaveClass('clear');
	});
});
