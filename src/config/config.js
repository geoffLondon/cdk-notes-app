const { Config } = require(`./${process.env.REACT_APP_ENV}.config.js`)

export default {
  sessionTimeout: 1800000, // 30 Minutes
  ...Config
}
