import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
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
}
