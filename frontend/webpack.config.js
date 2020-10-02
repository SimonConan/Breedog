const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const glob = require('glob');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        polyfill: "babel-polyfill",
        breedog: "./src/js/app.js"
    },
    output: {
        filename: "assets/js/[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        host: '0.0.0.0'
    },
    plugins: [
        new CleanWebpackPlugin({
            // verbose:true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css",
            chunkFilename: "assets/css/[id].css",
        }),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), "src", "views", "*.hbs"),
            output: path.join(process.cwd(), "public", "[name].html"),
            partials: [path.join(process.cwd(), "src", "views", "partials", "*.hbs")]
        }),
        new ImageminPlugin({
            externalImages: {
                context: 'src',
                sources: glob.sync('src/images/*'),
                destination: 'public/assets/images',
                fileName: '[name].[ext]'
            },
            pngquant: {
                quality: '50-60'
            },
            plugins: [
                imageminMozjpeg({
                  quality: 50,
                  progressive: true
                })
              ]
        })
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
            {
                test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/images'
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new UglifyJsPlugin({
                include: /\.js$/
            })
        ],
    }
};