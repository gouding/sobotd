/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      // exclude: [/node_modules/],
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.(jpg|png|gif)/,
      use: ["url-loader?limit=8888"]
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: '[local]--[hash:base64:5]'
        }
      }, {
        loader: "less-loader",
      }]
    },
    {
      test: /\.less$/,
      include: /node_modules/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
      }, {
        loader: "less-loader",
        options: {
          modifyVars: {
            "primary-color": "#0DAEAF",
            "link-color": "#0DAEAF",
            "success-color":"#0DAEAF",
            "font-size-base":"14px",
            "border-radius-base":"0",
          },
          javascriptEnabled: true,
        }
      }]
    },
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 4444
  }
};