const notFoundError = name => `Please pass the ${name} parameter to plugin`;

module.exports = (config, env, helpers) => {
  if (!config) throw new Error(notFoundError("config"));
  if (!env) throw new Error(notFoundError("env"));
  if (!helpers) throw new Error(notFoundError("helpers"));

  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Add tailwind css at the top.
    plugins.unshift(require("tailwindcss"));
  });
  return config;
};
