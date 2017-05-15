'use strict';

const path = require('path');
const webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const rootDir = path.resolve(__dirname, '.');

module.exports = {
    devtool: 'source-map',
    entry: {
    	polyfills: [ path.resolve(rootDir, 'src', 'polyfills') ],
    	vendor: [ path.resolve(rootDir, 'src', 'vendor') ],
    	app: [ path.resolve(rootDir, 'src', 'bootstrap') ]
    },
    devServer: {
	    port: 8081,
	    historyApiFallback: true
	},
    module: {
        loaders: [
        	// Support for .ts files.
            {
              test: /\.ts$/,
              loaders: ['awesome-typescript-loader?inlineSourceMap=true&sourceMap=false', 'angular2-template-loader', '@angularclass/hmr-loader'],
              exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },

            // copy those assets to output
            {
              test: /\.(png|jpe?g|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'file-loader?name=img/[name].[hash].[ext]?'
            },
            
            // copy those assets to output
            {
               test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
               loader: 'url-loader?limit=100000&name=fonts/[name].[hash].[ext]?'
            },

            // Support for *.json files.
            //{test: /\.json$/, loader: 'json-loader'},
	          
	        // all css required in app files will be merged in js files
	        {test: /\.css$/, include: root('src', 'main'), loader: 'raw-loader'},
	        
	        // all scss required in app files will be merged in js files
	        {test: /\.(scss|sass)$/, exclude: root('src', 'style'), loader: 'raw-loader!sass-loader'},
	
	        // support for .css files
	        // use 'null' loader in test mode (https://github.com/webpack/null-loader)
	        // all css in style will be bundled in an external css file
	        {
	            test: /\.css$/,
	            include: root('src','style'),
	            exclude: root('src', 'main'),
	            loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader']})
	        },
	        
	        // support for .scss files
	        // use 'null' loader in test mode (https://github.com/webpack/null-loader)
	        // all scss in style will be bundled in an external css file
	        {
	            test: /\.(scss|sass)$/,
	            include: root('src','style'),
	            exclude: root('src', 'main'),
	            loader:  ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'sass-loader']})
	        },
	        
	        
	        // support for .html as raw text
	        // todo: change the loader to something that adds a hash to images
	        {test: /\.html$/, loader: 'html-loader?attrs[]=img:src&attrs[]=input:src',  exclude: root('src/public')}
        ]
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(rootDir, 'assets'),
        publicPath: "/",
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new CommonsChunkPlugin({
            filename: 'js/[name].bundle.js',
            minChunks: Infinity,
            name: ['vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({filename: 'css/[name].[hash].css'}),
        new WebpackCleanupPlugin({
        	exclude: ["*.json", "i18n/**","img/**","icons/**","icon/**","images/**","screenshots/**"],
        })
    ],
    resolve: {
        extensions: [ '.js', '.ts' ]
    }
};

//Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
