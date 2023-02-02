export function buildDevServer(port: number) {
  return {
    static: './dist',
    port,
    historyApiFallback: true,
  };
}
