import path from 'path';                              // const path = require('path')   // path module import
import webpack from 'webpack';                        // const HtmlWebpackPlugin = require('html-webpack-plugin')   // to dynamicaly insert builded js-file in the index.html
import HtmlWebpackPlugin from 'html-webpack-plugin';  // const webpack = require('webpack')
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

// Типизируем переменные окружения
type Mode = 'production' | 'development';

interface EnvVariables {
    mode: Mode;
    port: number;
}

export default (env: EnvVariables) => {                                // чтобы настраивать сборку с помощью параметров

    const isDev = env.mode === 'development';

    const config: webpack.Configuration =
    {
        mode: env.mode ?? 'development',                   // 'production'
        entry: path.resolve(__dirname, 'src', 'index.ts'), // __dirname - current dir, entry - app entry point, there may be several of them
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',           // dynamic build name, to not to cache build files
            clean: true,                                   // delete old build, because browser cache files
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // будет подставлять файл сборки в html файл, tempalate нужен, так как иначе будет создаваться html-файл по умолчанию
            // медленный
            isDev && new webpack.ProgressPlugin(),                  // plugin to show progress of building of the project
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,                       // loader for ts and tsx files
                    use: 'ts-loader',                      // name of the loader
                    exclude: /node_modules/,               // not process this folder
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],            // extension to process
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined,
    }
    return config;
}
