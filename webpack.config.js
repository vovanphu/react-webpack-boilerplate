const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ],
                },
            },
            {
                test: /\.(css)$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 3000,
        hot: 'only',
    },
};
