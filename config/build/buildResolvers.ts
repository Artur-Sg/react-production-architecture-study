import { ResolveOptions } from 'webpack';
import path from 'path';

export function buildResolvers(src: string): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@app': path.resolve('src/app'),
      '@entities': path.resolve('src/entities'),
      '@features': path.resolve('src/features'),
      '@helpers': path.resolve('src/helpers'),
      '@pages': path.resolve('src/pages'),
      '@shared': path.resolve('src/shared'),
      '@widgets': path.resolve('src/widgets'),
    },
  };
}
