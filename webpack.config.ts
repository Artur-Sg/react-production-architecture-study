import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build';
import { BuildEnv, BuildPaths } from './config/build/types';

export default ({ mode = 'development', port = 3000, apiUrl = 'http://localhost:8000' }: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
    apiUrl,
  });

  return config;
};
