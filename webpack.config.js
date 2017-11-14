var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },

    // pour du debogage des sources ES2015
    devtool: 'cheap-module-eval-source-map',

    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: [['env', {
                    modules: false,
                    targets: { browsers: ["last 2 versions"] }
                }]]
            }
        },

        {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        },

        {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=fonts/[name].[ext]'
        },

        {
            test: /\.html$/,
            exclude: [/node_modules/],
            use: 'raw-loader',
        },

    ]},

    plugins: [
        new HtmlWebpackPlugin(),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper:'popper.js'
        })
    ]
};
