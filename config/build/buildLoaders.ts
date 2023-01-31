import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
  // Without typescript - need to add babel-loader
  const typeScripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  return [typeScripLoader, styleLoader];
}
