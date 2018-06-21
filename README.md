# tronic

tronic is a framework-agnostic webpack bundler with sensible defaults, aimed at reducing configuration and the amount of dependencies needed to be installed.

For an introduction and explanation behind the inspiration, please feel free to read [this Medium article](https://medium.com/richard-solomou/introducing-tronic-webpack-with-sensible-defaults-260c61ab062f).

## Getting started

Install with npm:

```bash
npm install --save-dev tronic
```

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "tronic",
    "build": "tronic build"
  }
}
```

You can start the development server using `npm start`.

You can generate a one-off build using `npm run build`, and a watching build using `npm run build -- --watch` or `npm run build -- -w`.

## Configuration

tronic ships with webpack settings for popular use cases and can be extended by utilising the `tronic.config.js` file at the root of your project. tronic will merge your local configuration with its webpack defaults to produce a bundle. You may provide an object to be merged with the webpack defaults, or a function that extends the defaults and returns the updated config.

```javascript
module.exports = {
  webpack: {
    entry: 'index.js'
  }
}
```

```javascript
module.exports = {
  webpack: (config) => {
    config.entry = 'index.js'
    return config
  }
}
```

## Plugins

You can further extend tronic with in-house and community-created plugins as below. Each plugin ships with its own set of defaults and can be extended similar to how you'd extend the webpack config above.

A list of available plugins can be found at https://github.com/tronite/tronic-plugins.

```javascript
module.exports = {
  plugins: [
    'tronic-plugin-babel',
    'tronic-plugin-sass',
    { name: 'tronic-plugin-html', options: { htmlWebpackPlugin: { ... } } }
  ]
}
```

## Defaults

tronic adheres to the `main` property in your `package.json` for the default entrypoint of the application. If that's not defined, it will use `src/index.js`.

Similarly, the default bundle location is the `dist` folder.

For a further look into preset defaults, please take a look at [defaults.js](https://github.com/tronite/tronic/blob/master/src/webpack/defaults.js).
