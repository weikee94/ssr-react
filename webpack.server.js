const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack we build bundle for nodeJS not for browser
    target: 'node',

    // tell webpack the root file of server application
    entry: './src/index.js',

    // tell webpack where to put the output file that generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [
        // to tell webpack not bundle any libraries into output bundle which
        // specified in the node_modules folder
        webpackNodeExternals()
    ]
}

module.exports = merge(baseConfig, config);
