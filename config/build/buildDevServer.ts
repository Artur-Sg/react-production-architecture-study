import path from 'path';

export function buildDevServer(port: number) {
  return {
    static: path.join('public'),
    port,
    historyApiFallback: true,
  };
}
