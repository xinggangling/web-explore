const path = require('path');
const CleanDistPlugin = require('./webpack-plugins/clean-dist-plugin');

module.exports = (env, argv) => {
    const { mode } = argv;
    return {
        mode,
        entry: {
            router: './js/router.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
        },
        plugins: [new CleanDistPlugin(path.resolve(__dirname, 'dist'))],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                },
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader',
                    ],
                },
            ],
        },
    };
};
