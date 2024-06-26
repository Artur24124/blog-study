import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const styleLoader = buildCssLoader(isDev);

	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{ loader: 'file-loader' },
		],
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		tsLoader,
		styleLoader,
	];
}
