import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }

    const tsLoader = {
        // ts-loader умеет рвботать с JSX
        // Если бы мы не использовали ts, нужен был бы babel-loader
        test: /\.tsx?$/,                       // loader for ts and tsx files
        use: 'ts-loader',                      // name of the loader
        exclude: /node_modules/,               // not process this folder
    }

    return [
        // порядок важен
        scssLoader,
        tsLoader,
    ]
}
