import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { resolveModulePath } from '../utils'

export const js = {
  test: /\.js$/,
  use: [
    {
      loader: resolveModulePath('babel-loader'),
      options: {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-stage-0', { decoratorsLegacy: true }],
        ],
      },
    },
    resolveModulePath('eslint-loader'),
  ],
  exclude: /node_modules/,
}

export const json = {
  test: /\.json$/,
  use: resolveModulePath('json-loader'),
}

export const css = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: resolveModulePath('style-loader'),
    use: resolveModulePath('css-loader'),
  }),
}

export const sass = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: resolveModulePath('style-loader'),
    use: [resolveModulePath('css-loader'), resolveModulePath('sass-loader')],
  }),
}
