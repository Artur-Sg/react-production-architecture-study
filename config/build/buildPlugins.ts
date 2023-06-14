import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';

const progressPluginHandler = (percentage: number, message: string, ...args: unknown[]) => {
  // e.g. Output each progress message directly to the console:
  // eslint-disable-next-line no-console
  console.info('\x1b[32m%s\x1b[0m', `${Math.round(percentage * 100)}%`, message, ...args);
};

export function buildPlugins(
  htmlPath: string,
  isDev: boolean,
  apiUrl: string,
  project: string
): Array<WebpackPluginInstance> {
  return [
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
    new ProgressPlugin({
      activeModules: false,
      entries: true,
      handler: progressPluginHandler,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: isDev ? 'server' : 'disabled' }),
  ];
}
