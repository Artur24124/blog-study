import path from 'path';
import { Configuration } from 'webpack';

import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv): Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};
	const mode: BuildMode = env.mode || 'development';
	const isDev = mode === 'development';
	const port = env.port || 8080;

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	});
};
