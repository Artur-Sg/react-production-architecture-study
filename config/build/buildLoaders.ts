import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const babelLoader = {
    test: /\.(jsx?|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // Without typescript - need to add babel-loader
  const typeScripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => path.includes('.module.'),
            localIdentName: isDev
              ? '[local]' // '[path][name]__[local]'
              : '[local]__[hash:base64:4]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [babelLoader, typeScripLoader, styleLoader, svgLoader, fileLoader];
}
