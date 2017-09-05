import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
