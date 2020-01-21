const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./assets/index.html"
        })
    ]
};
