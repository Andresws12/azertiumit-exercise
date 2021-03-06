const path = require('path');

module.exports = {
    transpileDependencies: ['d3-scale', 'd3-array', 'cash-dom'],

    devServer: {
        port: 8085,
    },

    pwa: {
        name: 'Azertiumit ejercicio',
        themeColor: ' #ee7003',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxOptions: {
            exclude: [
                /\.map$/,
                /^manifest.*\.js(?:on)?$/,
                /\.js$/,
                /\.css$/,
                /\.html$/,
            ],
            skipWaiting: true,
        },
        iconPaths: {
            favicon32: 'img/icons/icon-32x32.png',
            favicon16: 'img/icons/icon-16x16.png',
            appleTouchIcon: 'img/icons/icon-152x152.png',
            msTileImage: 'img/icons/icon-144x144.png',
        },
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, 'src/styles/utilities.scss')],
        },
    },

    chainWebpack(config) {
        config.resolve
            .plugin('tsconfig-paths')
            .use(require('tsconfig-paths-webpack-plugin'));
    },
};
