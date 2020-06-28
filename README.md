# Preact CLI Tailwind CSS Plugin

[![npm](https://img.shields.io/npm/v/preact-cli-tailwind)](https://www.npmjs.com/package/preact-cli-tailwind)

Adds [Tailwind CSS](https://tailwindcss.com/) to [Preact CLI](https://github.com/preactjs/preact-cli).

Tailwind is added as a PostCSS Plugin.

## Usage

```bash
npm i preact-cli-tailwind tailwindcss --save-dev

# OR

yarn add preact-cli-tailwind tailwindcss --dev
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

## Contributing

PRs Welcome.
