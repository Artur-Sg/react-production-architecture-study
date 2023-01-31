import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDev: boolean): RuleSetRule[] {
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

  return [typeScripLoader, styleLoader];
}
