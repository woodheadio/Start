import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import common from './webpack.common.js';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE.ENV': JSON.stringify('production')
      }
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
});
