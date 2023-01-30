import { Configuration } from 'webpack';
import { BuildOptions, BuildPaths } from './types/config';
import { buildLoaders, buildPlugins, buildResolvers } from './';
import webpackDevServer from 'webpack-dev-server';

export function buildWebpackConfig({
  mode,
  paths: { entry, build, html },
}: BuildOptions): Configuration {
  const config = {
    mode,
    entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(html),
  } as Configuration;

  const isDev = mode === 'development';

  if (isDev) {
    config.devtool = 'inline-source-map';
    config.devServer = {
      static: './dist',
    };
    config.optimization = {
      runtimeChunk: 'single',
    };
  }

  return config;
}
