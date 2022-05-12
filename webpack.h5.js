const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require("fs");

const config = {
    entry: {},
    devtool: "source-map",
    mode: "development",
    output: {
        filename: "[name].bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        port: 8090,
        open: true,
        compress: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "dist",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "dist",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: { url: false, sourceMap: true },
                    },
                    { loader: "less-loader", options: { sourceMap: true } },
                ],
            },
        ],
    },
};

const entry = {};
const htmlTemplates = [];
const jsFiles = fs.readdirSync(__dirname + "/src/pages");
jsFiles.forEach((item) => {
    const pageName = item;
    htmlTemplates.push(
        new HtmlWebpackPlugin({
            title: pageName,
            filename: `${pageName}.html`,
            chunks: [`${pageName}`],
            inject: 'body',
            template: path.resolve(__dirname, "template/h5.template.html"),
        })
    );
    entry[pageName] = `./src/pages/${pageName}/index.js`;
});
config.entry = entry;
config.plugins.push(...htmlTemplates);

module.exports = config;
