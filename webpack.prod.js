const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin");



module.exports = {
    optimization: {
        minimizer: [new TerserPlugin({}),
                new OptimizeCssAssetsPlugin({})]
    },
    output: {
        libraryTarget:'var',
    library:'Client'
},
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
         
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{loader: 'file-loader'}]
        }
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new WorkboxPlugin.GenerateSW()
     
    ]
}