// entrypoint -> output
// output path needs to be an absolute path.
// Loader allows you to customize the js file as it is consumed by webpack, transforming it by babel.

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }]
    }
};

