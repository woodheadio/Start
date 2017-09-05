import merge from 'webpack-merge';
import path from 'path';
import common from './webpack.common.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
});
