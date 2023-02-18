import { ResolveOptions } from 'webpack';
import { buildAliases } from './loaders/buildAliases';

export function buildResolvers(src: string): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: buildAliases(),
  };
}
