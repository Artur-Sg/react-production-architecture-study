import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig, BuildPaths, BuildEnv } from './config/build';

export default ({ mode, port }: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
  });

  return config;
};
