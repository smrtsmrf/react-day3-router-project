module.exports = {
	entry: {
		main: "./src/App.js"
	},
	output: {
		path: "./public",
		filename: "bundle.js",
		publicPath: "/"
	},
	devtools: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{ 
				test: /\.jpg$/, 
				loader: 'file' 
			},	
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'css'
			}
		]	
	},
	devServer: {
          contentBase: './public'
        , historyApiFallback: true
        , stats: {
            colors: true
        }
    }
}
