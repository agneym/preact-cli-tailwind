# Preact CLI Tailwind CSS Plugin

[![npm](https://img.shields.io/npm/v/preact-cli-tailwind)](https://www.npmjs.com/package/preact-cli-tailwind)

Adds [Tailwind CSS](https://tailwindcss.com/) to [Preact CLI](https://github.com/preactjs/preact-cli).

Tailwind is added as a PostCSS Plugin. Also adds Purge CSS plugin in production.

## Usage

```bash
npm i preact-cli-tailwind --save-dev
npm i tailwindcss --save

# OR

yarn add preact-cli-tailwind --dev
yarn add tailwindcss
```

In root run:

```
npx tailwindcss init
```

Add these to global stylesheet `src/styles/index.css:

```
/* purgecss start ignore */
@tailwind base;
/* purgecss end ignore */

/* purgecss start ignore */
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
```

In your `preact.config.js`:

```js
/** ...*/
import tailwind from "preact-cli-tailwind";

export default {
  webpack(config, env, helpers, options) {
    /**
     * ... after the boilerplate
     */
    config = tailwind(config, env, helpers);
    return config;
  },
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
