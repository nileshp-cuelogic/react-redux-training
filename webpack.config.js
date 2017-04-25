let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //entry point
    entry: path.resolve(__dirname, 'src') + '/app/index.js',

    //output point 
    output: {
        path: path.resolve(__dirname, "dist") + '/app',
        filename: 'app.bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        //     new HtmlWebpackPlugin({
        //     minify: {
        //         collapseWhitespace: true
        //     },
        //     hash: true
        // }),
        new ExtractTextPlugin({
            allChunks: true
        })
    ]
};