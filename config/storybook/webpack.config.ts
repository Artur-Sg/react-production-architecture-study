import { resolve } from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildAliases } from '../build/loaders/buildAliases';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types';

export default ({ config }: { config: webpack.Configuration }) => {
  const newConf = {
    ...config,
  };

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src'),
  };

  if (!newConf.resolve) {
    newConf.resolve = {};
  }

  newConf.resolve.modules?.push(paths.src);
  newConf.resolve.extensions?.push('.ts', '.tsx');

  newConf.resolve.alias = buildAliases();

  if (newConf.module) {
    newConf.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    newConf.module?.rules?.push(buildCssLoader(true));
    newConf.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
  }

  return newConf;
};
