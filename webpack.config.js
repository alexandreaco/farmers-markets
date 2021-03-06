var path         = require("path");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader',
      }
    ]
  },
  postcss: (webpack) => [
    precss,
    autoprefixer,
    require("postcss-import")({ addDependencyTo: webpack }),
  ]
};
