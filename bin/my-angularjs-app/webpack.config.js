const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path =  require('path');

module.exports={
    entry: './src/app/app.js',
    output: {
        filename: 'my-angularjs-app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
        //new webpack.optimize.splitChunks(/* chunkName = */"vendor")
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: {
        port: 3000
    }
};



// const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const { IndexHtmlWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/index-html-webpack-plugin');


// var path = require("path");

// var _root = path.resolve(__dirname, ".");

// function getRoot(args) {
//   args = Array.prototype.slice.call(arguments, 0);
//   return path.join.apply(path, [_root].concat(args));
// }

// module.exports = function (env, argv) {
//   const envKeys = env === 'prod' ? {
//     'process.env.production': true
//   } : {
//     'process.env.production': true
//   };
//   return {
//     entry: {
//       main: "./src/app/app.js",
//     },
//     target: "web",
//     devtool: false,
//     output: {
//       library: 'my-angularjs-app',
//       path: getRoot("dist"),
//       publicPath: env==='prod' ? 'http://localhost:5052/dist/': '/',
//       filename: "[name].js"
//     },

//     resolve: {
//       extensions: [".js", ".html"]
//     },

//     module: {
//       rules: [
//         {
//           test: /.js$/,
//           parser: {
//             system: true
//           }
//         },
//         // Templates
//         {
//           test: /\.html$/,
//           exclude: getRoot("src", "index.html"),
//           use: [
//             {
//               loader: "raw-loader"
//             }
//           ]
//         },
//         {
//           test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani|eot|svg)$/,
//           use: [
//             {
//               loader: 'url-loader',
//               options: {
//                 limit: 8192,
//                 name: '[name].[hash:20].[ext]'
//               }
//             }
//           ]
//         },
//       ]
//     },
//     plugins: [
//       new UglifyJsPlugin(),
//       new webpack.DefinePlugin(envKeys),

//       new CopyWebpackPlugin([
//         {
//           from: getRoot("src", "index.html"), to: getRoot("dist", "index.html")
//         },
//         {
//           from: getRoot("src", "app"), to: getRoot("dist", "assets")
//         }

//       ]),
//       new IndexHtmlWebpackPlugin({
//         input: './src/index.html',
//         output: 'index.html',
//         entrypoints: [
//           './src/app/app.js'
//         ]
//       })
//     ]
//   };
// };