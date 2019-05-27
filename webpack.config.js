const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "pls-binding.min.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    }
}
