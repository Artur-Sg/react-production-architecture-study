import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
  const typeScripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScripLoader];
}
