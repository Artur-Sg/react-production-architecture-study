import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const progressPluginHandler = (
  percentage: number,
  message: string,
  ...args: unknown[]
) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

const commonConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(progressPluginHandler),
  ],
};

const config = (env: unknown, argv: { mode: string }) => {
  if (argv.mode === 'development') {
    commonConfig.devtool = 'inline-source-map';
    commonConfig.devServer = {
      static: './dist',
    };
    commonConfig.optimization = {
      runtimeChunk: 'single',
    };
  }

  return commonConfig;
};

export default config;
