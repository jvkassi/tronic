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

## Defaults

Entrypoint is `src/index.js`

Bundle output happens in `dist` folder

## Arguments

tronic's CLI accepts a `use` flag which determines which defaults it starts out with.

Currently accepted options are `js`, `json`, `css`, and `sass`.

You can use any of the below formats to trigger this:

```bash
tronic --use js --use css
tronic --use=js --use=css
tronic --use=js,css
tronic --use=js,json,css,sass
```

This flag also works with the `build` command.
