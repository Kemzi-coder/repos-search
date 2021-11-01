const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	devServer: {
      port: 3000
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new HTMLWebpackPlugin({template: './src/index.html'}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|png|svg|jpeg)/,
				loader: 'file-loader'
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.m?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			}
		]
	}
}