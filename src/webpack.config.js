
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const extractCss = new ExtractTextPlugin('app.css');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    entry: [
        './app/app.js',
        './assets/style/app.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            'App': path.resolve(__dirname, 'app/'),
            'Views': path.resolve(__dirname, 'views/'),
            'Common': path.resolve(__dirname, 'views/common'),
            'Sections': path.resolve(__dirname, 'views/sections'),
            'Pages': path.resolve(__dirname, 'views/pages'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: ['css-loader?url=false', 'sass-loader', 'import-glob-loader']
                    // css-loader?url=false helps resolve background images urls
                    // https://github.com/webpack-contrib/css-loader/issues/256
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2015' ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                // vue-loader options
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    plugins: [
        extractCss,
        new CopyWebpackPlugin([
           { from: 'assets/img', to: 'img' }
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
};
