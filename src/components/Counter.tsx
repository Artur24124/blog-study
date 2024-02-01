import { FC, useState } from 'react';

import classes from './Counter.module.scss';

export const Counter: FC = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<h1>Count: {count}</h1>

			<div className={classes.controls}>
				<button className={classes.button} onClick={() => setCount(count + 1)}>+</button>
				<button className={classes.button} onClick={() => setCount(count - 1)}>-</button>
			</div>
		</div>
	);
};