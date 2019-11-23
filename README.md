# Preact CLI Tailwind CSS Plugin

![npm](https://img.shields.io/npm/v/preact-cli-tailwind)

Adds [Tailwind CSS](https://tailwindcss.com/) to [Preact CLI](https://github.com/preactjs/preact-cli).

Tailwind is added as a PostCSS Plugin. Also adds Purge CSS plugin in production.

## Usage

```bash
npm i preact-cli-tailwind --save-dev

# OR

yarn add preact-cli-tailwind --dev
```

In your `preact.config.js`:

```js
const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  return config;
};
```

## API

Pass in `config`, `env` and `helpers` as forwarded from config.

It also exposes a fourth argument `params` which allows you to [customise the regex](https://tailwindcss.com/docs/controlling-file-size#understanding-the-regex) provided to Purge CSS.

```js
const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers, {
    regex: /[\w-/:%]+(?<!:)/g,
  });
  return config;
};
```

## Contributing

PRs Welcome.
