import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter: FC = () => (
	<div className='page-wrapper'>
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				))}
			</Routes>
		</Suspense>
	</div>
);
