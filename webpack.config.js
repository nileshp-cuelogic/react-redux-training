let path = require('path');
module.exports = {
    //entry point
    entry: path.resolve(__dirname, 'src') + '/app/index.js',

    //output point 
    output: {
        path: path.resolve(__dirname, "dist") + '/app',
        filename: 'bundle.js',
        publicPath:'/app/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};