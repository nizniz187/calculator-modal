const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: `${srcPath}/main`,
  output: {
    filename: '[name].bundle.js',
    path: publicPath,
    publicPath: publicPath
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname),
    index: 'index.html',
    writeToDisk: true,
    hot: true,
    watchContentBase: true
  },
  resolve: {
    alias: {
      components: `${srcPath}/components`,
      containers: `${srcPath}/containers`,
      store: `${srcPath}/store`
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      },
      { 
        test: /.js|.jsx$/, 
        exclude: /node_modules/, 
        use: { 
					loader: 'babel-loader', 
					options: { 
						presets: [
							'@babel/preset-react',
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
					} 
        } 
			}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })
  ]
};