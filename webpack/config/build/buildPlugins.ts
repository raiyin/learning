import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({ mode, paths, analyzer, platform }: BuildOptions): Configuration['plugins'] {

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        // будет подставлять файл сборки в html файл, tempalate нужен, так как иначе будет создаваться html-файл по умолчанию
        // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new HtmlWebpackPlugin({ template: paths.html }),
        // Для подмены глобальных переменных
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        })
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins.filter(Boolean)
}
