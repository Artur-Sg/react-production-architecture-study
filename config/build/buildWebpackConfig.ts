import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer, buildLoaders, buildPlugins, buildResolvers } from './';

export function buildWebpackConfig({
  mode = 'development',
  port = 3000,
  paths: { entry, build, html },
}: BuildOptions): Configuration {
  const isDev = mode === 'development';

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
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
    optimization: {
      runtimeChunk: 'single',
    },
  } as Configuration;

  return config;
}
