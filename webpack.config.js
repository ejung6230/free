const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,         // .js 확장자를 가진 파일을 대상으로
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',   // babel-loader를 사용하여 JSX를 변환
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 원본 HTML 파일 경로
            filename: 'index.html', // 생성할 HTML 파일 이름
        }),
    ],
};
