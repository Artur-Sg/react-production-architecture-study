import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';

const progressPluginHandler = (
  percentage: number,
  message: string,
  ...args: unknown[]
) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

export function buildPlugins(htmlPath: string): Array<WebpackPluginInstance> {
  return [
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
    // new ProgressPlugin(progressPluginHandler),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
