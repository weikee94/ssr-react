
module.exports = {
    // tell webpack to run babel on every file
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browser: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    },
};
