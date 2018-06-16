# tronic

tronic is a framework-agnostic webpack bundler with sensible defaults

## Getting started

Install with npm:

```bash
npm install -D tronic
```

Run watcher:

```bash
tronic
```

Run one-off build:

```bash
tronic build
```

## Setup

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "tronic",
    "build": "tronic build"
  }
}
```

You can then start the development server using `npm start`.

You can generate a one-off build using `npm run build`, and a watching build using `npm run build -- --watch` or `npm run build -- -w`.

## Configuration

tronic ships with default webpack settings for popular use cases and can be extended by utilising the `tronic.config.js` file at the root of your project. tronic will then merge your local configuration with its webpack defaults to produce a bundle.

You can further extend tronic with in-house and community-created plugins as below. Each plugin ships with its own set of defaults similar to the default webpack config that comes pre-built in tronic.

A list of available plugins exists at https://github.com/tronite/tronic-plugins.

```javascript
module.exports = {
  plugins: [
    'babel',
    'sass',
    { name: 'html', options: { htmlWebpackPlugin: { ... } } }
  ],
  webpack: {
    devServer: {
      contentBase: __dirname
    },
    output: {
      path: __dirname
    }
  }
}
```

## Defaults

Entrypoint is the `main` property in your `package.json` or `src/index.js` if that's missing

Bundle output happens in `dist` folder
