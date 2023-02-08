import { buildDevServer, buildLoaders, buildPlugins, buildResolvers } from './';
import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';

export function buildWebpackConfig({
  mode,
  port,
  paths: { entry, build, html, src },
}: BuildOptions): Configuration {
  const isDev = mode === 'development';

  const config = {
    mode,
    entry,
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(src),
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(html, isDev),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
    optimization: {
      runtimeChunk: 'single',
    },
  } as Configuration;

  return config;
}
