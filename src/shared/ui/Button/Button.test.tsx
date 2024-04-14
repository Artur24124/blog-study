import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
	test('render Button', () => {
		render(<Button>btn</Button>);
		expect(screen.getByText('btn')).toBeInTheDocument();
	});

	test('render Button with theme clear', () => {
		render(<Button theme={ButtonTheme.CLEAR}>btn</Button>);
		expect(screen.getByText('btn')).toHaveClass('clear');
	});
});
