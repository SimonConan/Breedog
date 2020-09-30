const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        polyfill: "babel-polyfill",
        breedog: "./src/js/index.js"
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "assets")
    },
    devServer: {
        host: '0.0.0.0'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/css/styles.css",
            chunkFilename: "/css/[id].css",
        }),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
        ]
    }
};