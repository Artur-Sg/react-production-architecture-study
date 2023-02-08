import path from 'path';
import { BuildEnv, BuildPaths, buildWebpackConfig } from './config/build';
import { Configuration } from 'webpack';

export default ({ mode = 'development', port = 3000 }: BuildEnv) => {
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
  });

  return config;
};
