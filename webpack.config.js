'use strict'

const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve("./dist"),
		filename: 'main.js'
	},
	resolve: {
		root: path.resolve('./node_modules')
	}, 
	resolveLoader: {
		root: path.resolve('./node_modules'),
	},
	node: {
		__dirname: false,
		__filename: false,
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-3']
				}
			}
		]
	}
}
