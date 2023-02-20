import path from 'path';

export function buildAliases() {
  return {
    '@app': path.resolve('src/app'),
    '@entities': path.resolve('src/entities'),
    '@features': path.resolve('src/features'),
    '@helpers': path.resolve('src/helpers'),
    '@pages': path.resolve('src/pages'),
    '@shared': path.resolve('src/shared'),
    '@widgets': path.resolve('src/widgets'),
    '@config': path.resolve('config'),
  };
}
