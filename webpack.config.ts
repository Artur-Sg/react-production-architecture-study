import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig, BuildPaths } from './config/build';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
});

export default config;
