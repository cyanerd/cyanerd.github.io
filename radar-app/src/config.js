const config = {
  production: {
    featureToggles: {
      UIRefresh2022: false,
    },
  },
  development: {
    featureToggles: {
      UIRefresh2022: false,
    },
  },
}
module.exports = process.env.ENVIRONMENT ? config[process.env.ENVIRONMENT] : config
