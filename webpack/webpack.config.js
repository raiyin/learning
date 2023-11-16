const path = require('path') // path module import
const HtmlWebpackPlugin = require('html-webpack-plugin') // to dynamicaly insert builded js-file in the index.html
const webpack = require('webpack')

module.exports = (env) => { // чтобы настраивать сборку с помощью параметров
    return {
        mode: env.mode ?? 'development', // 'production'
        entry: path.resolve(__dirname, 'src', 'index.js'), // __dirname - current dir, entry - app entry point, there may be several of them
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js', // dynamic build name, to not to cache build files
            clean: true, // delete old build, because browser cache files
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // будет подставлять файл сборки в html файл, tempalate нужен, так как иначе будет создаваться html-файл по умолчанию
            new webpack.ProgressPlugin(), // plugin to show progress of building of the project
        ]
    }
}
