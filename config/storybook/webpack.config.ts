import { resolve } from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildAliases } from '../build/loaders/buildAliases';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src'),
  };

  if (!config.resolve) {
    config.resolve = {};
  }

  config.resolve.modules?.push(paths.src);
  config.resolve.extensions?.push('.ts', '.tsx');

  config.resolve.alias = buildAliases();

  if (config.module) {
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module?.rules?.push(buildCssLoader(true));
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    config?.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: true,
      })
    );
  }

  return config;
};
