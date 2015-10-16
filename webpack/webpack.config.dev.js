var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions:         ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$|\.jsx$|\.es6$|\.babel$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        stage: 0,
        plugins: [
          'react-transform'
        ],
        extra: {
          'react-transform': [{
            target: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module']
          },{
            transform: "react-transform-catch-errors",
            imports: ["react", "redbox-react"]
          }]
        }
      }
    }]
  }
};
