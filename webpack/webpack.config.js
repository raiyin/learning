const path = require('path') // path module import

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // __dirname - current dir, entry - app entry point, there may be several of them
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js', // dynamic build name, to not to cache build files
        clean: true, // delete old build, because browser cache files
    }
}
