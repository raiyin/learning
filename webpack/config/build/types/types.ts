export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

// Типизируем переменные окружения
export type BuildMode = 'production' | 'development';
export type BuildPlatforms = 'mobile' | 'desktop'

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    platform: BuildPlatforms;
    analyzer?: boolean;
}
