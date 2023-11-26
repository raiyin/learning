import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypescript from "react-refresh-typescript"
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader"
        ]
    }

    const tsLoader = {
        // ts-loader умеет рвботать с JSX
        // Если бы мы не использовали ts, нужен был бы babel-loader
        exclude: /node_modules/,               // not process this folder
        test: /\.tsx?$/,                       // loader for ts and tsx files
        use: [                      // name of the loader
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypescript()].filter(Boolean)
                    })
                }
            }
        ]
    }

    // const babelLoader = {
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: "babel-loader",
    //         options: {
    //             presets: [
    //                 '@babel/preset-env',
    //                 "@babel/preset-typescript",
    //                 [
    //                     "@babel/preset-react",
    //                     {
    //                         runtime: isDev ? 'automatic' : 'classic',
    //                     }
    //                 ]
    //             ]
    //         }
    //     }
    // }

    const babelLoader = buildBabelLoader(options)

    return [
        // порядок важен
        assetLoader,
        scssLoader,
        //tsLoader,
        babelLoader,
        svgrLoader
    ]
}
