const path = require('path');

module.exports = {
    mode: 'production', // could be development
    entry: './src/index.ts', // Entry file to be executed in the bundler webpack
    target: 'node', //Language
    output: { // File and file name to be generated
        path: path.resolve(__dirname + '/dist'), // Folder route
        filename: 'main.js' // File name
    },
    // file resolutions
    resolve: { // Type of files to bundle
        extensions: ['.ts', '.js']
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/, // All files that ends with .ts and .tsx
                use: 'ts-loader', // Which loader should be applied
                exclude: /node_modules/ // Which folder and sub-folders should be excluded
            }
        ]
    }
};