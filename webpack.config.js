const path = require("path");
const webpack = require("webpack");
var WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');
const sourcePath = path.resolve(process.cwd(), './src')

module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_tcomponents)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/env"] },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        name: 'imgs/[name].[ext]'
                    },
                }]
            }
        ],
    },
    resolve: { 
        alias:{
            '@': sourcePath
        },
        extensions: ["*", ".js", ".jsx"]
     },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    devServer: {
        static: path.join(__dirname, "public/"),
        port: 3000,
        hot: true,
        open: true,
        devMiddleware: {
            publicPath: "http://localhost:3000/dist/",
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'React':'react'
        }),
        new WebpackIconfontPluginNodejs({
            fontName: 'my-icons',
            cssPrefix: 'ico',
            svgs: path.join(sourcePath, 'svgs/*.svg'),
            fontsOutput: path.join(sourcePath, 'fonts/'),
            cssOutput: path.join(sourcePath, 'fonts/font.css'),
            htmlOutput: path.join(sourcePath, 'fonts/_font-preview.html'),
            jsOutput: path.join(sourcePath, 'fonts/fonts.js'),
            namesOutput: path.join(sourcePath, 'fonts/names.txt'),
          }),
    ],
};