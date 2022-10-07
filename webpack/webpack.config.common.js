/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
              name: '[name].[contenthash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index_template.html'
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    fallback: {
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib')
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './bundles/[name].[contenthash].js'
  },
  optimization: {
    moduleIds: 'deterministic',
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react'
        },
        utilityVendor: {
          test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
          name: 'utility'
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!lodash)(!moment)(!moment-timezone)[\\/]/,
          name: 'vendor'
        }
      }
    }
  }
};
