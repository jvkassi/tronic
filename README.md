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

tronic ships with default settings for popular use cases but can be further extended using a `webpack.config.js` file at the root of your project. tronic will then merge your local configuration with its defaults to produce a bundle.

You can further extend tronic with plugins by creating a file named `tronic.config.js` at the root of your project, with the following content:

```javascript
module.exports = {
  plugins: ['babel', 'sass']
}
```

## Defaults

Entrypoint is the `main` property in your `package.json` or `src/index.js` if that's missing

Bundle output happens in `dist` folder
