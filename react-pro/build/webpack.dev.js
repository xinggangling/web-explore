const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    // const {  } = env;
    const { mode } = argv;

    const HTML_PATH = path.resolve(__dirname, '../index.html');

    return {
        mode,
        entry: {
            index: './index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.jsx', '.js', '.json', '.css', '.less'],
        },
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
                    use: ['style-loader', 'css-loader', 'less-loader'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            limit: 1024 * 10,
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlPlugin({
                template: HTML_PATH,
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, '../'),
            publicPath: '/', // 静态资源目录
            compress: false, // gzip
            historyApiFallback: true,
            noInfo: false,
            https: false, // 本地地址是否使用https
            host: '0.0.0.0', // 支持外网访问 default: localhost
            useLocalIp: true, // 使用本机ip访问
            port: 2333,
            open: false,
            hot: true,
            inline: true,
            disableHostCheck: true,
            stats: {
                assets: true,
                chunks: false,
                colors: true,
                version: false,
                hash: true,
                timings: true,
                chunkModules: false,
                children: false,
                modules: false,
            },
        },
    };
};
