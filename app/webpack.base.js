const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, "./src/js/app.js"),
      path.resolve(__dirname, "./src/scss/main.scss")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js",
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: "../css/style.css"})
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  module: {
   rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: '../img/',
            }
          }
        ]
      }
    ]
  }
}
