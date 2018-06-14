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

## Configuration

tronic ships with default settings for popular use cases but can be further extended using a `webpack.config.js` file at the root of your project. tronic will then merge your local configuration with its defaults to produce a bundle.

You can further extend tronic with plugins by creating a file named `tronic.config.js` at the root of your project, with the following content:

```javascript
module.exports = {
  plugins: ['babel', 'sass']
}
```

## Defaults

Entrypoint is `src/index.js`

Bundle output happens in `dist` folder
