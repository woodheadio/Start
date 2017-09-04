import merge from 'webpack-merge';
import path from 'path';
import common from './webpack.common.js';

export default merge(common, {
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/'
  }
});
