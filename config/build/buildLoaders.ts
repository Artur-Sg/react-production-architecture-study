import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';

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

  const styleLoader = buildCssLoader(isDev);

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
