const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // target: 'node',
    mode: 'production',
    entry: {
        "simple-observable-state": './src/index.ts'
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'simple-observable-state',
        libraryTarget: 'umd'
    },
    externals: [
        'rxjs',
        /^rxjs\/.+$/,
        'immer'
    ]
}