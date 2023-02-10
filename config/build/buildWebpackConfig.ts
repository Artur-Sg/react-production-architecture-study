import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

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
